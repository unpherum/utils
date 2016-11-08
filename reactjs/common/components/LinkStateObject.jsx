import update from 'react-addons-update'

function convertToJSON_v2(field,value)
{
    var object = {},tmp_object=null;
    var layers = field?field.split('.'):[];
    for(var i=layers.length-1;i>=0;i--)
    {
        if(i==layers.length-1)
        {
            //object={$set: value};
            object[layers[i]]={$set: value};
        }
        else
        {
            tmp_object ={}
            tmp_object[layers[i]]= object;
            object = tmp_object;
        }

    }

    return object;
}


function convertToJSON(field,value)
{
    var object = {};
    var layers = field?field.split('.'):[];
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

    }
    return object;
}
function setNestedValue(owner,field,object)
{
    var layers = field.split('.');

    var object = {};
    for(var i=0;i<layers.length;i++)
    {


    }
    return object;
}

function LinkStateObject_v2(owner,field,valueKey,onChangeCallback)
{

    return {
        value: getNestedValue(owner,field),
        requestChange: function(component){

            var object = convertToJSON_v2(field,component[valueKey]);
            console.log(object);
            //object[field] = component[valueKey];
            // owner.setState(object);
            //var newData = update(owner.state, {$merge: object})
            var newData = update(owner.state, object)
            owner.setState(newData)
            if(onChangeCallback)
                onChangeCallback( component[valueKey]);
        }

    }
}

function LinkStateObject(owner,field,valueKey,onChangeCallback)
{

    return {
        value: getNestedValue(owner,field),
        requestChange: function(component){

            var object = convertToJSON(field,component[valueKey]);
            console.log(object);
            //object[field] = component[valueKey];
            owner.setState(object);
            if(onChangeCallback)
                onChangeCallback( component[valueKey]);
        }

    }
}


module.exports = {
    LinkStateObject: LinkStateObject,
    LinkStateObject_v2: LinkStateObject_v2
};

