// Copyright (c) 2019, saidul and contributors
// For license information, please see license.txt
//frappe.ui.form.on('DocType:string','Event/Field:string','function')
frappe.ui.form.on('Library Transaction', 'library_member',
	function(frm){
		frappe.call({
            "method": "frappe.client.get",
            args: {
                doctype: "Library Member",
                name: frm.doc.library_member
			},
			callback: function (data) {
				frappe.model.set_value(frm.doctype,
                    frm.docname, "member_name",
                    data.message.first_name
                    + (data.message.last_name ? (" " + data.message.last_name) : "")
				)
    
            }

		})

});
