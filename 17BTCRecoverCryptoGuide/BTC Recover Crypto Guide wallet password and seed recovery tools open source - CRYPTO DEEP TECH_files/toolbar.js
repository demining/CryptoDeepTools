var WPFC_TOOLBAR = {
	ajax_url: false,
	init: function(){
		var self = this;

		if(typeof ajaxurl != "undefined" || typeof wpfc_ajaxurl != "undefined"){
			self.ajax_url = (typeof ajaxurl != "undefined") ? ajaxurl : wpfc_ajaxurl;
		}else{
			alert("AjaxURL has NOT been defined");
		}

		jQuery("body").append('<div id="revert-loader-toolbar"></div>');

		jQuery("#wp-admin-bar-wpfc-toolbar-parent-default li").click(function(e){
		var id = (typeof e.target.id != "undefined" && e.target.id) ? e.target.id : jQuery(e.target).parent("li").attr("id");
		var action = "";
		
		if(id == "wp-admin-bar-wpfc-toolbar-parent-settings"){
			if(jQuery("div[id^='wpfc-modal-toolbarsettings-']").length === 0){
				self.open_settings();
			}
		}else{
			if(id == "wp-admin-bar-wpfc-toolbar-parent-delete-cache"){
				action = "wpfc_delete_cache";
			}else if(id == "wp-admin-bar-wpfc-toolbar-parent-delete-cache-and-minified"){
				action = "wpfc_delete_cache_and_minified";
			}else if(id == "wp-admin-bar-wpfc-toolbar-parent-clear-cache-of-this-page"){
				action = "wpfc_delete_current_page_cache";
			}else if(id == "wp-admin-bar-wpfc-toolbar-parent-clear-cache-of-allsites"){
				action = "wpfc_clear_cache_of_allsites";
			}

			WPFC_TOOLBAR.send({"action": action, "path" : window.location.pathname});
		}
		});
	},
	open_settings: function(){
		var self = this;

		jQuery("#revert-loader-toolbar").show();
		jQuery.ajax({
			type: 'GET',
			url: self.ajax_url,
			data : {"action": "wpfc_toolbar_get_settings", "path" : window.location.pathname},
			dataType : "json",
			cache: false, 
			success: function(data){
				if(data.success){
					var data_json = {"action": "wpfc_toolbar_save_settings", "path" : window.location.pathname, "roles" : {}};

					Wpfc_New_Dialog.dialog("wpfc-modal-toolbarsettings", {
						close: function(){
							Wpfc_New_Dialog.clone.remove();
						},
						finish: function(){
							jQuery("#" + Wpfc_New_Dialog.id).find("input[type='checkbox']:checked").each(function(i, e){
								data_json.roles[jQuery(e).attr("name")] = 1;
							});

							WPFC_TOOLBAR.send(data_json);

							Wpfc_New_Dialog.clone.remove();
					}}, function(dialog){
						jQuery("#" + Wpfc_New_Dialog.id).find("input[type='checkbox']").each(function(i, e){
							if(typeof data.roles[jQuery(e).attr("name")] != "undefined"){
								jQuery(e).attr('checked', true);
							}
						});

						Wpfc_New_Dialog.show_button("close");
						Wpfc_New_Dialog.show_button("finish");

						setTimeout(function(){
							jQuery("#revert-loader-toolbar").hide();
						}, 500);
					});
				}else{
					alert("Toolbar Settings Error!")
				}
			}
		});
	},
	send: function(data_json){
		var self = this;

		if(typeof wpfc_nonce != "undefined" && wpfc_nonce){
			data_json.nonce = wpfc_nonce;
		}

		jQuery("#revert-loader-toolbar").show();
		jQuery.ajax({
			type: 'GET',
			url: self.ajax_url,
			data : data_json,
			dataType : "json",
			cache: false, 
			success: function(data){
				if(data[1] == "error"){
					if(typeof data[2] != "undefined" && data[2] == "alert"){
						alert(data[0]);
					}else{
						Wpfc_New_Dialog.dialog("wpfc-modal-permission", {close: "default"});
						Wpfc_New_Dialog.show_button("close");
					}
				}

				if(typeof WpFcCacheStatics != "undefined"){
					WpFcCacheStatics.update();
				}else{
					jQuery("#revert-loader-toolbar").hide();
				}
			}
		});
	}
};

window.addEventListener('load', function(){
	jQuery(document).ready(function(){
		WPFC_TOOLBAR.init();
	});
});

