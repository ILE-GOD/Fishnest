

calculate_button=document.getElementById("button");
calculate_button.onclick=calculate;


function calculate() {
  var input=document.getElementById("input-screen").value;
  input=parseInt(input);
  feedRequired(input);
}






function feedRequired (numberOfFish) {

    var feedQty1mm=Math.round(numberOfFish/200);
    if (feedQty1mm===0) {
        document.getElementById('kg1.5mm').innerHTML="1";
        //console.log("1mm " + "1 kg of feed");
    } else {
        document.getElementById('kg1.5mm').innerHTML=feedQty1mm;
        //console.log("1mm " + feedQty1mm + " kg of feed");
    }


    var feedQty2mm=Math.round(numberOfFish/33.3);
    document.getElementById('kg2mm').innerHTML=feedQty2mm;
    //console.log("2mm " + feedQty2mm + " kg of feed");


    var feedQty3mm=Math.round(numberOfFish/13.3);
    document.getElementById('kg3mm').innerHTML=feedQty3mm;
    //console.log("3mm " + feedQty3mm + " kg of feed");

    var feedQt4mm=Math.round(numberOfFish/4.44);
    document.getElementById('kg4mm').innerHTML=feedQt4mm;
    //console.log("4mm " + feedQt4mm + " kg of feed");

    var feedQty6mm=Math.round(numberOfFish/3.33);
    document.getElementById('kg6mm').innerHTML=feedQty6mm;
    //console.log("6mm " + feedQty6mm + " kg of feed");

    var totalFeedQty=feedQty1mm + feedQty2mm + feedQty3mm + feedQt4mm + feedQty6mm;
    document.getElementById('Totalkg').innerHTML=totalFeedQty;
    //console.log("Total = " + totalFeedQty + " kg");

    var feedBag1mm=Math.round(feedQty1mm/5);
    document.getElementById('bag1.5mm').innerHTML=feedBag1mm;
    //console.log("1mm " + feedBag1mm + "bag of feed");

    var feedBag2mm=Math.round(feedQty2mm/15);
    document.getElementById('bag2mm').innerHTML=feedBag2mm;
    //console.log("2mm " + feedBag2mm + "bags of feed");

    var feedBag3mm=Math.round(feedQty3mm/15);
    document.getElementById('bag3mm').innerHTML=feedBag3mm;
    //console.log("3mm " + feedBag3mm + "bags of feed");

    var feedBag4mm=Math.round(feedQt4mm/15);
    document.getElementById('bag4mm').innerHTML=feedBag4mm;
    //console.log("4mm " + feedBag4mm + "bags of feed");

    var feedBag6mm=Math.round(feedQty6mm/15);
    document.getElementById('bag6mm').innerHTML=feedBag6mm;
    //console.log("6mm " + feedBag6mm + "bags of feed");

    var totalBagQty=feedBag1mm + feedBag2mm + feedBag3mm + feedBag4mm + feedBag6mm;
    document.getElementById('Totalbag').innerHTML=totalBagQty;
    //console.log("Total = " + totalBagQty + " Bags");

    }

    //document.querySelector("button").style.backgroundColor="green";

    //$("p").css("color","blue");

    //$("#button").text("Search");
    //$("button").text("Dont click me");
