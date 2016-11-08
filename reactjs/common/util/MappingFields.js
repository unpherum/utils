class MappingFields {

	mapString(arrayFields, fieldToMap){

		var mappedValue;
	      
	      $.each(arrayFields, function(i, v){
	        if(fieldToMap.toString().toLowerCase() == v.value.toString().toLowerCase()){
	          fieldToMap = v.label;
	          return;
	        }
	      });

	      if(!mappedValue){
	      		mappedValue = fieldToMap;
	      }

	      return mappedValue;
	}
	mapBoolean(arrayFields, fieldToMap){

		var mappedValue;
		if(fieldToMap.toString() == "Yes" || fieldToMap.toString() == "Joint Planning"){
			fieldToMap = true;
		}else{
			fieldToMap = false;
		}
	      
	      $.each(arrayFields, function(i, v){
	        if(fieldToMap == v.value){
	          fieldToMap = v.label;
	          return;
	        }
	      });

	      if(!mappedValue){
	      		mappedValue = fieldToMap;
	      }

	      return mappedValue;
	}

}


export default new MappingFields();
