
// Functions , text and prompt stored in object
shape={
    circle: ["Enter Radius" ,function areacir(radius){
        return 3.14 * radius * radius;
    }  , function per_circle(radius){
        return 2*3.14*radius;
    } , "r" , "πr^2" , "2πr" ,"RADIUS" , "AREA" , "PERIMETER"],
    triangle: ["Enter Side (Base & Height)" , function area_triangle(side){
        return 0.433*side*side;
    } , function peri_trianlge(side){
        return 3 * side;
    } , "s" , "0.4333 * s * s" , "3 * s" ,"SIDE" , "AREA" , "PERIMETER"],
    square: ["Enter Side" , function area_square(side){
        return side*side;
    } , function peri_square(side){
        return 4*side;
    } , "s" , "s * s " , "4 * s " , "SIDE" , "AREA" , "PERIMETER"],
};

// Function which executes when user clicks any shape
function SelectShape(){
    ShapeSelected = event.target.className;
    // console.log(ShapeSelected);
    let NextButton = document.createElement("button");
    NextButton.innerHTML = "NEXT";
    NextButton.classList.add('next-button' , 'buttons');
    var InitialPage = document.querySelector(".first-page");
    var Tick1 = document.querySelector(".tick-icon-circle");
    var Tick2= document.querySelector(".tick-icon-triangle");
    var Tick3= document.querySelector(".tick-icon-square");
    shape.selected = ShapeSelected;
    console.log(shape.selected);
    // Displaying and Hiding the tick part
    if(ShapeSelected=="circle"){
        Tick1.style.zIndex = "2";
        Tick2.style.zIndex = "-1";
        Tick3.style.zIndex = "-1";
    }
    if(ShapeSelected=="triangle"){
        Tick1.style.zIndex = "-1";
        Tick2.style.zIndex = "2";
        Tick3.style.zIndex = "-1";
    }
    if(ShapeSelected=="square"){
        Tick1.style.zIndex = "-1";
        Tick2.style.zIndex = "-1";
        Tick3.style.zIndex = "2";
    }
    InitialPage.appendChild(NextButton);
    NextButton.addEventListener("click" , GetInput);
}

// Function which executes when user clicks next button on first page
function GetInput(){
    let RemovePageOne = document.querySelector(".first-page");
    RemovePageOne.remove();
    let CreatePage2 = document.createElement("section");
    let Label = document.createElement("p");
    let InputText = document.createElement("input");
    InputText.type = "number";
    InputText.className = "input-text";
    let CalculateButton = document.createElement("Button");
    CalculateButton.classList.add('calc-button' , 'buttons');
    CalculateButton.innerHTML = "CALCULATE";
    var UserPrompt = shape[ShapeSelected][0];
    Label.innerHTML = "2. " + UserPrompt;
    document.body.appendChild(CreatePage2);
    CreatePage2.appendChild(Label);
    CreatePage2.appendChild(InputText);
    CreatePage2.appendChild(CalculateButton);
    CalculateButton.addEventListener("click" , ProcessValues);
}

// Calling functions and processing it when values are passed
function ProcessValues(){
    let UserValue = document.querySelector(".input-text").value;
    let RemovePageTwo = document.querySelector("section")
    RemovePageTwo.remove();
    var Area = shape[ShapeSelected][1](UserValue);
    var Perimeter = shape[ShapeSelected][2](UserValue);
    DisplayResult(UserValue,Area,Perimeter);
}

// Displaying result in the table in the final page
function DisplayResult(UserValue,Area , Perimeter){
    let CreatePage3 = document.createElement("section");
    let ShapeDisplay = document.createElement("div");
    ShapeDisplay.className = ShapeSelected;
    CreatePage3.className = "page3";
    let TableData = document.createElement("table");
    TableData.className = "page3-table"
    let StartAgainButton = document.createElement("button");
    StartAgainButton.innerHTML = "START AGAIN";
    StartAgainButton.classList.add('start-again' , 'buttons');
    CreatePage3.appendChild(ShapeDisplay);  
    CreatePage3.appendChild(TableData); 
    CreatePage3.appendChild(StartAgainButton);   
    

    var ShapeName = TableData.insertRow(0);
    ShapeName.className = "row1";
    var SideRowOne = TableData.insertRow(1);
    var AreaRow = TableData.insertRow(2);
    var PerimeterRow = TableData.insertRow(3);

    var DisplayShapeName = ShapeName.insertCell();

    DisplayShapeName.colSpan = 3;
    DisplayShapeName.className = "shape-name";
    var LabelSide = SideRowOne.insertCell(0);
    var FormulaForSide = SideRowOne.insertCell(1);
    FormulaForSide.className = "col2";
    var UserInputtedValue = SideRowOne.insertCell(2);
    UserInputtedValue.className = "col3";

    var AreaLabel = AreaRow.insertCell(0);
    var FormulaForArea = AreaRow.insertCell(1);
    FormulaForArea.className = "col2";
    var AreaResult = AreaRow.insertCell(2);
    AreaResult.className = "col3";

    var PerimeterLabel = PerimeterRow.insertCell(0);
    var FormulaForPerimeter = PerimeterRow.insertCell(1);
    FormulaForPerimeter.className = "col2";
    var PerimeterResult = PerimeterRow.insertCell(2);
    PerimeterResult.className = "col3";
    if(ShapeSelected=="triangle"){
        DisplayShapeName.innerHTML = "Equilateral " + ShapeSelected;
    }   
    else{
        DisplayShapeName.innerHTML = ShapeSelected;
    }
    LabelSide.innerHTML = shape[ShapeSelected][6];
    FormulaForSide.innerHTML = shape[ShapeSelected][3];
    UserInputtedValue.innerHTML = UserValue + " cm";

    AreaLabel.innerHTML = shape[ShapeSelected][7];
    FormulaForArea.innerHTML = shape[ShapeSelected][4];
    AreaResult.innerHTML = Area + " sq cm";

    PerimeterLabel.innerHTML = shape[ShapeSelected][8];
    FormulaForPerimeter.innerHTML = shape[ShapeSelected][5];
    PerimeterResult.innerHTML = Perimeter.toFixed(2) + " cm";
    document.body.appendChild(CreatePage3);
    StartAgainButton.addEventListener("click" , ReloadPage );
}

// Reload function when try again button is clicked
function ReloadPage(){
    location.reload();
}