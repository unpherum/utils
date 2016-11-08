
'use strict';

function LookupLabel(options,selectedValue)
{
    var label = '';
    options.forEach(function(object,i){
       //console.log(object.value+":"+selectedValue);
       if(object.value == selectedValue)
       {
            label= object.label;
       }

    });

    return label;
}


module.exports = LookupLabel;
