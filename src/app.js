var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

addChocolates = (chocolates,color, count)=>{
    if(count<=0)
    return "Number cannot be zero/negative";
    else
    for(var i=0;i<count;i++)
    chocolates.unshift(color);
    return chocolates;
}


//Progression 2: Remove ___ chocolates from the top the dispenser

removeChocolates = (chocolates,number)=>{
    var arr = [];
    if(number<=0)
    return "Number cannot be zero/negative";
    else if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else
    for(var i=0;i<number;i++)
    {
    var removed = chocolates.shift()
    arr.push(removed);
    }
    return arr;
}

//Progression 3: Dispense ___ chocolates
dispenseChocolates = (chocolates,number) =>{
    var arr = [];
    if(number<=0)
    return "Number cannot be zero/negative";
    else if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else
    for(var i=0;i<number;i++)
    {
    var removed = chocolates.pop()
    arr.push(removed);
    }
    return arr;
}


//Progression 4: Dispense ___ chocolates of ____ color
dispenseChocolatesOfColor = (chocolates,number, color) =>{
    var arr = [];
    var count =0;
    if(number<=0)
    return "Number cannot be zero/negative";
    else if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else
    for(var i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color)
        count++
        arr.push(chocolates.pop(color));
            if(count==number)
            return arr;
    }
    
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
noOfChocolates = (chocolates) =>{
    let arr = [];
    for(i=0;i<chocolates.length;i++)
    {
    if(chocolates[i]!==0)
    {
        var count = 1;
        for(j=i+1;j<chocolates.length;j++)
        {
            if(chocolates[i]==chocolates[j])
            {
                count++;
                chocolates[j]=0;
            }
        }
        arr.push(count)
        }
    }
        return arr;
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors
sortChocolateBasedOnCount = (chocolates) =>{
    let arr = [];
    for(i=0;i<chocolates.length;i++)
    {
    if(chocolates[i]!==0)
    {
        var count = 1;
        for(j=i+1;j<chocolates.length;j++)
        {
            if(chocolates[i]==chocolates[j])
            {
                count++;
                chocolates[j]=0;
            }
        }
        arr.push(count)
        }
    }
    arr.sort(function(a, b){
        return b - a;
    });
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
changeChocolateColor = (chocolates,number,color, finalColor) =>{
    var count=0;
    if(number<=0)
    return "Number cannot be zero/negative"
    if(chocolates.length==0)
    return chocolates;
    for(i=0;i<chocolates.length;i++){
    if(chocolates[i]==finalColor)
    return "Can't replace the same chocolates";
    if(chocolates[i]==color)
    {
    chocolates[i] = finalColor;
    count++;
    }
    if(count==number)
    return chocolates;
}
    
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
changeChocolateColorAllOfxCount = (chocolates,color,finalColor) =>{
    if(color==finalColor)
    return "Can't replace the same chocolates";
    else
    for(var i = chocolates.length; i >= 0; i--)
    {
        if(chocolates[i]==color)
        chocolates[i] = finalColor;
    }

    return [chocolates.length, chocolates];   
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
