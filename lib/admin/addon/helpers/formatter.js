import { helper } from '@ember/component/helper';

export default helper( function formatter(params/*, hash*/) {
  let items = params[0].match(/\{(.*?)\}/g).map(item => JSON.parse(item)); // Parses string output to JSON object

  // Mapping key-value pairs to lists for cleaner output
  let itemList = items.map(item => {  
    let html  = '<ul class="p-4  text-left ">';
    for(const [key,val] of Object.entries(item)) {
      html+= `<li class="border-b-2 border-gray-100">${key}:<span class="pl-8 font-bold">${val}</span></li>`
    }
    html += '</ul>';
    return html;
  }).join('');
  return itemList;
});
