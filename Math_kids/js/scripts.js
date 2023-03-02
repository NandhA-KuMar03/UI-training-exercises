localStorage.clear();
// Functions , text and prompt stored in object
shape={
        Text : {
            TextArea : "AREA",
            TextPerimeter : "PERIMETER",
            UnitValue : " cm",
            UnitArea : " sq cm",
            UnitPerimeter : " cm"
        },
        circle : {
            prompt: "Enter Radius",
            FormulaForArea : "πr^2",
            FormulaForPerimeter : "2πr",
            Variable : "r",
            Text : "Radius",
            Area(radius){
                return 3.14 * radius * radius;
            },
            Perimeter(radius){
                return 2*3.14*radius;
            }
        },
        triangle : {
            prompt : "Enter Side (Base & Height)",
            FormulaForArea : "0.4333 * s * s",
            FormulaForPerimeter : "3 * s",
            Variable : "s",
            Text : "Side",
            Area(side){
                return 0.433*side*side;
            },
            Perimeter(side){
                return 3 * side;
            }
        },
        square : {
            prompt : "Enter Side",
            FormulaForArea : "s * s",
            FormulaForPerimeter : "4 * s",
            Variable : "s",
            Text : "Side",
            Area(side){
                return side*side;
            },
            Perimeter(side){
                return 4*side;
            }
        },
        selected : ""
};

// Function which executes when user clicks any shape
function SelectShape(){
    ShapeSelected = event.target.className;
    localStorage.setItem("Shape" , ShapeSelected);
    let NextButton = document.createElement("button");
    NextButton.innerHTML = "NEXT";
    NextButton.classList.add('next-button' , 'buttons');
    var InitialPage = document.querySelector(".first-page");
    var PreviousSelected = shape.selected;
    if(PreviousSelected == ""){
        document.querySelector("." + ShapeSelected + " .tick").style.zIndex = "2";
        shape.selected = ShapeSelected;
    }
    if(PreviousSelected != ""){
        document.querySelector("." + PreviousSelected + " .tick").style.zIndex = "-1";
        document.querySelector("." + ShapeSelected + " .tick").style.zIndex = "2";
        shape.selected = ShapeSelected;
    }
    InitialPage.appendChild(NextButton);
    localStorage.clear();
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
    var UserPrompt = shape[ShapeSelected].prompt;
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
    var Area = shape[ShapeSelected].Area(UserValue);
    var Perimeter = shape[ShapeSelected].Perimeter(UserValue);
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
    LabelSide.innerHTML = shape[ShapeSelected].Text;
    FormulaForSide.innerHTML = shape[ShapeSelected].Variable;
    UserInputtedValue.innerHTML = UserValue + shape.Text.UnitValue;

    AreaLabel.innerHTML = shape.Text.TextArea;
    FormulaForArea.innerHTML = shape[ShapeSelected].FormulaForArea;
    AreaResult.innerHTML = Area + shape.Text.UnitArea;

    PerimeterLabel.innerHTML = shape.Text.TextPerimeter;
    FormulaForPerimeter.innerHTML = shape[ShapeSelected].FormulaForPerimeter;
    PerimeterResult.innerHTML = Perimeter.toFixed(2) + shape.Text.UnitPerimeter;
    document.body.appendChild(CreatePage3);
    StartAgainButton.addEventListener("click" , ReloadPage );
}

// Reload function when try again button is clicked
function ReloadPage(){
    location.reload();
    localStorage.clear();
}