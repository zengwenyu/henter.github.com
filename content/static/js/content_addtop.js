function thumb_images(uploadid,returnid) {
	var d = window.top.art.dialog({id:uploadid}).data.iframe;
	var in_content = d.$("#att-status").html().substring(1);
	if(in_content=='') return false;
	if(!IsImg(in_content)) {
		alert('选择的类型必须为图片类型');
		return false;
	}
	if($('#'+returnid+'_preview').attr('src')) {
		$('#'+returnid+'_preview').attr('src',in_content);
	}
	$('#'+returnid).val(in_content);
}
function change_images(uploadid,returnid){
	var d = window.top.art.dialog({id:uploadid}).data.iframe;
	var in_content = d.$("#att-status").html().substring(1);
	var str = $('#'+returnid).html();
	var contents = in_content.split('|');
	$('#'+returnid+'_tips').css('display','none');
	if(contents=='') return true;
	$.each( contents, function(i, n) {
		var ids = parseInt(Math.random() * 10000 + 10*i); 
		str += "<li id='image"+ids+"'><input type='text' name='"+returnid+"_url[]' value='"+n+"' style='width:310px;' ondblclick='image_priview(this.value);' class='input-text'> <input type='text' name='"+returnid+"_alt[]' value='图片说明"+(i+1)+"' style='width:160px;' class='input-text' onfocus=\"if(this.value == this.defaultValue) this.value = ''\" onblur=\"if(this.value.replace(' ','') == '') this.value = this.defaultValue;\"> <a href=\"javascript:remove_div('image"+ids+"')\">移除</a> </li>";
		});
	
	$('#'+returnid).html(str);
}

function change_multifile(uploadid,returnid){
	var d = window.top.art.dialog({id:uploadid}).data.iframe;
	var in_content = d.$("#att-status").html().substring(1);
	//var str = $('#'+returnid).html();
	var str = '';
	var contents = in_content.split('|');
	$('#'+returnid+'_tips').css('display','none');
	if(contents=='') return true;
	$.each( contents, function(i, n) {
		var ids = parseInt(Math.random() * 10000 + 10*i); 
		str += "<li id='multifile"+ids+"'><input type='text' name='"+returnid+"_fileurl[]' value='"+n+"' style='width:310px;' class='input-text'> <input type='text' name='"+returnid+"_filename[]' value='附件说明"+(i+1)+"' style='width:160px;' class='input-text' onfocus=\"if(this.value == this.defaultValue) this.value = ''\" onblur=\"if(this.value.replace(' ','') == '') this.value = this.defaultValue;\"> <a href=\"javascript:remove_div('multifile"+ids+"')\">移除</a> </li>";
		});
	$('#'+returnid).append(str);
}

function add_multifile(returnid)
{
	var ids = parseInt(Math.random() * 10000); 
	var str = "<li id='multifile"+ids+"'><input type='text' name='"+returnid+"_fileurl[]' value='' style='width:310px;' class='input-text'> <input type='text' name='"+returnid+"_filename[]' value='附件说明' style='width:160px;' class='input-text'> <a href=\"javascript:remove_div('multifile"+ids+"')\">移除</a> </li>";	
	$('#'+returnid).append(str);
}
function set_title_color(color) {
	$('#title').css('color',color);
	$('#style_color').val(color);
}
//-----------------------
function check_content(obj) {
	CKEDITOR.instances[obj].insertHtml('');
	CKEDITOR.instances[obj].focusManager.hasFocus;
	return false;
}

function image_priview(img) {
	window.top.art.dialog({title:'图片查看',fixed:true, content:'<img src="'+img+'" />',id:'image_priview',time:5});
}
function remove_div(id) {
	$('#'+id).remove();
}

function input_font_bold() {
	if($('#title').css('font-weight') == '700' || $('#title').css('font-weight')=='bold') {
		$('#title').css('font-weight','normal');
		$('#style_font_weight').val('');
	} else {
		$('#title').css('font-weight','bold');
		$('#style_font_weight').val('bold');
	}
}
function ruselinkurl() {
	if($('#islink').attr('checked')==true) {
		$('#linkurl').attr('disabled','');
		$('#formValidator').html('<form name="myform" id="form" action="?m=content&c=content&a=add" method="post" enctype="multipart/form-data">');
		return false;
	} else {
		$('#linkurl').attr('disabled','true');
	}
}
function close_window() {
	if($('#title').val() !='') {
	art.dialog({content:'内容已经录入，确定离开将不保存数据！', fixed:true,yesText:'我要关闭',noText:'返回保存数据',style:'confirm', id:'bnt4_test'}, function(){
				window.close();
			}, function(){
				
				});
	} else {
		window.close();
	}
	return false;
}


function ChangeInput (objSelect,objInput) {
	if (!objInput) return;
	var str = objInput.value;
	var arr = str.split(",");
	for (var i=0; i<arr.length; i++){
	  if(objSelect.value==arr[i])return;
	}
	if(objInput.value=='' || objInput.value==0 || objSelect.value==0){
	   objInput.value=objSelect.value
	}else{
	   objInput.value+=','+objSelect.value
	}
}

//移除相关文章
function remove_relation(sid,id) {
	var relation_ids = $('#relation').val();
	if(relation_ids !='' ) {
		$('#'+sid).remove();
		var r_arr = relation_ids.split('|');
		var newrelation_ids = '';
		$.each(r_arr, function(i, n){
			if(n!=id) {
				if(i==0) {
					newrelation_ids = n;
				} else {
				 newrelation_ids = newrelation_ids+'|'+n;
				}
			}
		});
		$('#relation').val(newrelation_ids);
	}
}
//显示相关文章
function show_relation(modelid,id) {
$.getJSON("?m=content&c=content&a=public_getjson_ids&modelid="+modelid+"&id="+id, function(json){
	var newrelation_ids = '';
	if(json==null) {
		alert('没有添加相关文章');
		return false;
	}
	$.each(json, function(i, n){
		newrelation_ids += "<li id='"+n.sid+"'>·<span>"+n.title+"</span><a href='javascript:;' class='close' onclick=\"remove_relation('"+n.sid+"',"+n.id+")\"></a></li>";
	});

	$('#relation_text').html(newrelation_ids);
}); 
}
//移除ID
function remove_id(id) {
	$('#'+id).remove();
}