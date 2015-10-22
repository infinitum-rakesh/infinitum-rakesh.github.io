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
					$("#addCustomerForm").fadeIn();
				}
			);

		$("#oGetCustomer").click(
				function(){
					$(".well").fadeOut(function(){$("#getCustomerForm").fadeIn();});
				}
			);

		$("#oGetAccount").click(
				function(){
					$(".well").fadeOut();
					$("#getAccountForm").fadeIn();
				}
			);

		$("#oGetAllAccounts").click(
				function(){
					$(".well").fadeOut();
					$("#getAllAccounts").fadeIn();
				}
			);

		$("#oGetTransactionList").click(
				function(){
					$(".well").fadeOut();
					$("#getTransactionList").fadeIn();
				}
			);		

	});