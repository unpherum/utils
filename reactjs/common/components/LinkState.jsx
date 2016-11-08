import update from 'react-addons-update'

'use strict';

function convertToJSON_v2(field,value)
{
    var object = {},tmp_object=null;
    var layers = field?field.split('.'):[];
    for(var i=layers.length-1;i>=0;i--)
    {
        if(i==layers.length-1)
        {
            //object={$set: value};
            object[layers[i]]=value;
        }
        else
        {
            tmp_object ={};
            tmp_object[layers[i]]= {$merge: object};
            object = tmp_object;
        }

    }

    return object;
}

function convertToJSON(field,value)
{
    var object = {};
    var layers = field.split('.');
    for(var i=0;i<layers.length;i++)
    {
        if(i==layers.length-1)
            object[layers[i]]=value;
        else
            object[layers[i]]={};
    }

    return object;
}

function getNestedValue(owner,field)
{
    var layers = field.split('.');

    var object = owner.state;
    for(var i=0;i<layers.length;i++)
    {
        object = object[layers[i]];
        if (object == null) {
            return "";
        }
    }
    return object;
}

function LinkState_v2(owner,field,onChangeCallback)
{

    return {
        value: getNestedValue(owner,field),
        requestChange: function(componentValue){
            var object = convertToJSON_v2(field,componentValue);
            var newData = update(owner.state, object);
            owner.setState(newData);
            if(onChangeCallback)
                onChangeCallback(componentValue);
        }

    }
}

function LinkState(owner,field,onChangeCallback)
{

    return {
        value: getNestedValue(owner,field),
        requestChange: function(componentValue){
            var object = convertToJSON(field,componentValue);
            owner.setState(object);
            if(onChangeCallback)
                onChangeCallback(componentValue);
        }

    }
}


module.exports =
{
    LinkState: LinkState,
    LinkState_v2: LinkState_v2
}

