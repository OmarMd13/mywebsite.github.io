const data = {
    "product1": {"totalBill": 15, "shiping": 30},
    "product2": {"totalBill": 10, "shiping": 40},
}
// you should create objects in projects for create Reference data type, Check (Javascript folder) for basic information;
let product1_bill = data["product1"]["totalBill"];
let product2_bill = data["product2"]["totalBill"];
let product1_shiping = data["product1"]["shiping"];
let product2_shiping = data["product2"]["shiping"];

function error(id){
    const value = $(`#${id}`).val();
    if (value > 5){
        alert("You can choose maximum 5 of the same product");
    }
    else{
        product1_bill = 15 * value;
        product2_bill = 10 * value;
    }
}
$("#countPdt1").click(function(){
    return error(this.id);
});
$("#countPdt1").keyup(function(){
    return error(this.id);
});
$("#countPdt2").click(function(){
    return error(this.id);
});
$("#countPdt2").keyup(function(){
    return error(this.id);
});

const add = (btn) => {
    const id = btn.id;
    if(id === "addBtn1"){
        if($("#addBtn2").hasClass("d-none")){
            $(`#${id}`).addClass("d-none");
            $("#rmvBtn1").addClass("show");

            $("#shiping").html(`$${product1_shiping + product2_shiping}`);
            $("#product").html(`$${product2_bill + product1_bill}`);
            $("#bill").html(`${product2_bill + product1_bill + 30 + 40}`);
        }
        else{
            $(`#${id}`).addClass("d-none");
            $("#rmvBtn1").addClass("show");

            $("#shiping").html(`$${product1_shiping}`);
            $("#product").html(`$${product1_bill}`);
            $("#dollar").addClass("show"); // only using this in "else condition" findout why
            $("#bill").html(`${product1_bill + 30}`);
        }
    }
    else if(id === "addBtn2"){
        if($("#addBtn1").hasClass("d-none")){
            $(`#${id}`).addClass("d-none");
            $("#rmvBtn2").addClass("show");

            $("#shiping").html(`$${product1_shiping + product2_shiping}`);
            $("#product").html(`$${product2_bill + product1_bill}`);
            $("#bill").html(`${product2_bill + product1_bill + 30 + 40}`);
        }
        else{
            $(`#${id}`).addClass("d-none");
            $("#rmvBtn2").addClass("show");

            $("#shiping").html(`$${product2_shiping}`);
            $("#product").html(`$${product2_bill}`);
            $("#dollar").addClass("show");
            $("#bill").html(`${product2_bill + product2_shiping}`);
        }
    }
}
const remove = (btn) => {
    const id = btn.id;
    if(id === "rmvBtn1"){
        if($("#addBtn2").hasClass("d-none")){
            $(`#${id}`).removeClass("show");
            $(`#${id}`).addClass("d-none");
            $("#addBtn1").removeClass("d-none");
            
            $("#shiping").html(`$${(product2_shiping + product1_shiping) - product1_shiping}`);
            $("#product").html(`$${(product2_bill + product1_bill) - product1_bill}`);
            $("#bill").html(`${(product2_bill + product2_shiping) - (product1_bill + product1_shiping)}`);
        }
        else{
            $(`#${id}`).removeClass("show");
            $(`#${id}`).addClass("d-none");
            $("#addBtn1").removeClass("d-none");

            $("#shiping").html("");
            $("#product").html("");
            $("#dollar").removeClass("show");
            $("#bill").html("");
        }
    }
    else if (id === "rmvBtn2"){
        if($("#addBtn1").hasClass("d-none")){
            $(`#${id}`).removeClass("show");
            $(`#${id}`).addClass("d-none");
            $("#addBtn2").removeClass("d-none");
            
            $("#shiping").html(`$${(product2_shiping + product1_shiping) - product2_shiping}`);
            $("#product").html(`$${(product2_bill + product1_bill) - product2_bill}`);
            $("#bill").html(`${(product2_bill + product2_shiping + product1_bill + product1_shiping) - (product2_bill + product2_shiping)}`);
        }
        else{
            $(`#${id}`).removeClass("show");
            $(`#${id}`).addClass("d-none");
            $("#addBtn2").removeClass("d-none");

            $("#shiping").html("");
            $("#product").html("");
            $("#dollar").removeClass("show");
            $("#bill").html("");
        }
    }
}
const code = () => {
    if($("#code").val() == "Omar"){
        let bill = $("#bill").html();
        $("#bill").html( bill - ( bill * (10/100) ) );
    }
    else{
        alert("Cupon Code not valid");
    }
}