$(document).ready(function(){
		//Do this when the page loags
		//Add customer option is loaded by default
		$("#getCustomerForm").hide();
		$("#getAccountForm").hide();
		$("#addAccountForm").hide();
		$("#getAllAccounts").hide();
		$("#getTransactionList").hide();

		//OnClick Events to execute the features

		$("#oAddCustomer").click(
				function(){
					$(".well").fadeOut();					
					setTimeout(function(){
						$('#addCustomerForm').fadeIn();
					}, 500);

				}
			);

		$("#oGetCustomer").click(
				function(){
					$(".well").fadeOut();
					setTimeout(function(){
						$('#getCustomerForm').fadeIn();
					}, 500);
				}
			);

		$("#oGetAccount").click(
				function(){
					$(".well").fadeOut();
					setTimeout(function(){
						$('#getAccountForm').fadeIn();
					}, 500);
				}
			);
			
		$("#oAddAccount").click(
				function(){
					$(".well").fadeOut();
					setTimeout(function(){
						$('#addAccountForm').fadeIn();
					}, 500);
				}
			);	

		$("#oGetAllAccounts").click(
				function(){
					$(".well").fadeOut();
					setTimeout(function(){
						$('#getAllAccounts').fadeIn();
					}, 500);
				}
			);

		$("#oGetTransactionList").click(
				function(){
					$(".well").fadeOut();
					setTimeout(function(){
						$('#getTransactionList').fadeIn();
					}, 500);
				}
			);		

	});
