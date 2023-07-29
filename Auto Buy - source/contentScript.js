function addCart () {
    if (typeof(document.querySelector('.addCartWideBtn')) != 'undefined' && document.querySelector('.addCartWideBtn') != null ) {
        var parent = document.querySelector('.addCartWideBtn');
        parent.click();

        window.addEventListener('load', function () {
            parent.click();
            window.location.href = "/delivery";
        });
}
}

function check_paymentType() {
    if (typeof(document.getElementById('payment_choose_member1')) != 'undefined' && document.getElementById('payment_choose_member1') != null ) {
        document.getElementById('payment_choose_member1').click();
        // console.log("ok");
    }
}


window.addEventListener('DOMContentLoaded', function () {
    // console.log('llllllllllllll');
    addCart();

    current_url = window.location.href;
    // console.log(current_url);

    if (current_url == "https://www.2ndstreet.jp/delivery") {

        window.addEventListener('load', function () {
            
            setTimeout(check_paymentType(), 300);
            // console.log("here------");

            const node = document.createElement("button");
            node.style.display = "none";
            node.setAttribute("id", "submit_to");
            node.setAttribute("onclick", "defaultSubmitToken('Form1')");
            document.getElementsByClassName('cartInformation-panel')[0].appendChild(node);

            var button = document.getElementById('submit_to');
            button.click();

        });
    } else if (current_url == "https://www.2ndstreet.jp/delivery/check") {
        console.log(current_url);
        var order_submit = document.getElementById('order_submit');
        order_submit.click();
    }
});