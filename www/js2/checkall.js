function toggleChecked(oForm)
{
	var oElems = oForm.elements;
	for (var i=1;oElems.length>i;i++) {
  		if (oElems[i].type == "checkbox") {
			if (oElems[i].checked == true) {
				oElems[i].checked = false;
			} else {
				oElems[i].checked = true;
			}
		}
	}
}