shape={
    Circle: ["Enter Radius" ,function areacir(radius){
        return 3.14 * radius * radius;
    }  , function per_circle(radius){
        return 2*3.14*radius;
    } , "r" , "πr" , "2πr^2" ,"RADIUS" , "AREA" , "PERIMETER"],
    Triangle: ["Enter Side (Base & Height)" , function area_triangle(side){
        return 0.433*side*side;
    } , function peri_trianlge(side){
        return 3 * side;
    } , "s" , "0.4333 *s *s" , "3 * s" ,"SIDE" , "AREA" , "PERIMETER"],
    Square: ["Enter Side" , function area_square(side){
        return side*side;
    } , function peri_square(side){
        return 4*side;
    } , "s" , "s *s " , "4 *s " , "SIDE" , "AREA" , "PERIMETER"]
};


function function_select_shape(){
    console.log(event.target.id);
    e = event.target.id;
    let btn = document.createElement("button");
    btn.innerHTML = "NEXT";
    btn.className = "next_button";
    var cs= document.querySelector(".firstpage");
    var tick1= document.querySelector(".tick_icon_circle");
    var tick2= document.querySelector(".tick_icon_triangle");
    var tick3= document.querySelector(".tick_icon_square");
    if(e=="Circle"){
        tick1.style.zIndex = "2";
        tick2.style.zIndex = "-1";
        tick3.style.zIndex = "-1";
    }
    if(e=="Triangle"){
        tick1.style.zIndex = "-1";
        tick2.style.zIndex = "2";
        tick3.style.zIndex = "-1";
    }
    if(e=="Square"){
        tick1.style.zIndex = "-1";
        tick2.style.zIndex = "-1";
        tick3.style.zIndex = "2";
    }
    cs.appendChild(btn);
    btn.addEventListener("click" , func1);
}


function func1(){
    let rem = document.querySelector(".firstpage");
    rem.remove();
    console.log(e);
    let create_page2 = document.createElement("section");
    let p = document.createElement("p");
    let inp = document.createElement("input");
    inp.className = "input_text";
    let btn2 = document.createElement("Button");
    btn2.className = "calc_button";
    btn2.innerHTML = "CALCULATE";
    if(e == "Circle")
        var txt = shape[e][0];
    else if(e == "Triangle")
        var txt = shape[e][0];
    else
        var txt = shape[e][0];
    p.innerHTML = "2. " + txt;
    document.body.appendChild(create_page2);
    create_page2.appendChild(p);
    create_page2.appendChild(inp);
    create_page2.appendChild(btn2);
    btn2.addEventListener("click" , fun3);
}


function fun3(){
    let val = document.querySelector(".input_text").value;
    console.log(val);
    let rem1 = document.querySelector("section")
    rem1.remove();
    if(e == "Circle"){
        var area = shape[e][1](val);
        var perimeter = shape[e][2](val);
        console.log(area);
        console.log(perimeter);
        fun4(val,area,perimeter);
    }
    if(e == "Triangle"){
        var area = shape[e][1](val);
        var perimeter = shape[e][2](val);
        console.log(area);
        console.log(perimeter);
        fun4(val,area,perimeter);
    }
    if(e == "Square"){
        var area = shape[e][1](val);
        var perimeter = shape[e][2](val);
        console.log(area);
        console.log(perimeter);
        fun4(val,area,perimeter);
    }
}

function fun4(val,area , perimeter){
    let create_page3 = document.createElement("section");
    let shape_div = document.createElement("div");
    shape_div.className = e;
    create_page3.className = "page3";
    let table_data = document.createElement("table");
    table_data.className = "page3_table"
    let start_again_btn = document.createElement("button");
    start_again_btn.className = "start_agian"
    start_again_btn.innerHTML = "START AGAIN";
    create_page3.appendChild(shape_div);  
    create_page3.appendChild(table_data); 
    create_page3.appendChild(start_again_btn);        
    var row = table_data.insertRow(0);
    row.className = "row1";
    var row1 = table_data.insertRow(1);
    var row2 = table_data.insertRow(2);
    var row3 = table_data.insertRow(3);

    var cell0 = row.insertCell();
    cell0.colSpan = 3;
    cell0.className = "row11";
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    cell2.className = "col2";
    var cell3 = row1.insertCell(2);
    cell3.className = "col3";

    var cell4 = row2.insertCell(0);
    var cell5 = row2.insertCell(1);
    cell5.className = "col2";
    var cell6 = row2.insertCell(2);
    cell6.className = "col3";

    var cell7 = row3.insertCell(0);
    var cell8 = row3.insertCell(1);
    cell8.className = "col2";
    var cell9 = row3.insertCell(2);
    cell9.className = "col3";

    if(e=="Triangle"){
        cell0.innerHTML = "Equilateral " + e;
    }   
    else{
        cell0.innerHTML = e;
    }
    cell1.innerHTML = shape[e][6];
    cell2.innerHTML = shape[e][3];
    cell3.innerHTML = val + " cm";

    cell4.innerHTML = shape[e][7];
    cell5.innerHTML = shape[e][4];
    cell6.innerHTML = area + " sq cm";

    cell7.innerHTML = shape[e][8];
    cell8.innerHTML = shape[e][5];
    cell9.innerHTML = perimeter.toFixed(2) + " cm";
    document.body.appendChild(create_page3);
    start_again_btn.addEventListener("click" , fun5 );
}

function fun5(){
    location.reload();
}