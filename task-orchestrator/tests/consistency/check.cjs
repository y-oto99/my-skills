#!/usr/bin/env node
// Static check over a deliberately small, manually extracted conditional-rule IR.
// No external packages or model API calls. This does NOT prove natural-language consistency.
const fs = require("node:fs");
const path = require("node:path");
const dir = __dirname;
const rules = JSON.parse(fs.readFileSync(path.join(dir, "rules.json"), "utf8")).rules;
const cases = JSON.parse(fs.readFileSync(path.join(dir, "cases.json"), "utf8")).cases;
const statuses = new Set(["require","forbid"]);
function overlap(a,b) {
  return Object.keys(a.when).every(k=>!(k in b.when)||a.when[k]===b.when[k]);
}
function findConflicts(items) {
  const found=[];
  for(let i=0;i<items.length;i++) for(let j=i+1;j<items.length;j++){
    const a=items[i],b=items[j];
    if(a.action===b.action && a.modality!==b.modality && overlap(a,b))
      found.push([a.id,b.id].sort().join("|"));
  }
  return found.sort();
}
let failures=0;
const ids=new Set();
for(const r of rules){if(ids.has(r.id)||!statuses.has(r.modality)||!r.source||!r.quote||!r.action||!r.when){console.error("Invalid rule",r.id);failures++} ids.add(r.id)}
for(const c of cases){
  const got=findConflicts([...rules,...c.add]);
  const expected=c.expect.map(pair=>pair.slice().sort().join("|")).sort();
  const ok=JSON.stringify(got)===JSON.stringify(expected);
  console.log((ok?"PASS":"FAIL")+" "+c.id+" "+c.title+(ok?"":" expected="+JSON.stringify(expected)+" got="+JSON.stringify(got)));
  if(!ok) failures++;
}
console.log("Rule count:",rules.length,"Cases:",cases.length,"Failures:",failures);
process.exitCode=failures?1:0;
