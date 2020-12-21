/**********exercice sur les tableaux***********/
/****exo6.1*****/

// var tab= []
// for(var i=0; i<7; i++)
// {
//    tab[i]=0
// }
// alert (tab)

/*****exo6.2******/
// var tab= []
// tab[0]="a";
// tab[1]="e";
// tab[2]="i";
// tab[3]="u";
// tab[4]="o";
// tab[5]="y";
// alert(tab);

/*****exo 6.3 *****/

// var tab= []
// for(var i=0;i<10;i++)
// {
//   var memo=parseInt(window.prompt("saisissez un nombre"));
//    tab[i]=memo;
// }
// alert(tab)
// console.log(tab);

/****exo 6.4*****/

// var tab=[]
// for(i=0;i<6;i++)
// {
//    tab[i]=i*i;
//    console.log(tab[i])
// }
// alert(tab)
// console.log(tab)

/*exo 6.5*/

// var tab= []
// tab[0]=1
// for(i=1;i<7;i++)
// {
//   tab[i]=tab[i-1]+2;
//   console.log(tab[i])
// }

// alert(tab)


/*****exo 6.8******/

// var n=parseInt(window.prompt("entrer la taille du tableau"))
// var tab=new Array(n)
// var pos=0;
// var neg=0;
// // console.log(tab.length)
// for(var i=0; i<tab.length; i++)
// {
//     var tmp=parseInt(window.prompt("entrer un nombre"));
//     // console.log(tmp);
//     tab[i]=tmp;
//     // console.log(tab[i]);
//      if(tab[i] >0)
//      {
//          pos=pos+1;
//         //  console.log(pos);
//      }
//      else if(tab[i]!=0)
//      {
//          neg=neg+1;
//         //  console.log(neg);
//      }
// }
// document.write("le tableau est:"," ",tab+"<br>")
// document.write("le nombre de valeur postive est:"," ",pos +"<br>")
// document.write("le nombre de valeur negative est:"," ",neg);

/*****exo 6.9 ******/

// var tab=[4,8,9,10,7,12]
// var som=0;
// for(i=0; i<tab.length; i++ )
// {
//    som+=tab[i];
// }
// document.write(som)

/****exo6.10 ******/

// var tab1=[4,8,7,9,1,5,4,6],
//     tab2=[7,6,5,2,1,3,7,4],
//     tab3=[], 
//     n=8
// for(var i=0; i<n; i++)
// {
    
    
//        tab3[i]= tab1[i]+tab2[i];
    
// }
// document.write(tab3)

/*****exo 6.11 ******/

// var tab1=[4,8,7,12]
// var    tab2=[3,6]
//  var  som=0;
// for(var i=0,n=tab1.length; i<n; i++)
// {
//     for(var j=0,n1=tab2.length; j<n1; j++)
//     {
//         som+=tab1[i]*tab2[j];
//     }
// }
// document.write(som)

/****exo 6.12 ******/


// var n=parseInt(window.prompt("entrer la taille du tableau"))
// var tab= new Array(n)
// for( var i=0; i<tab.length; i++)
// {
//      var tmp= window.prompt("entrer un nombre");
     
//      tab[i]=tmp;
     
//      tab[i] =parseInt(tab[i])+parseInt(1);
    
// }
// document.write(tab)

/***exo 6.13 ****/

 var n=parseInt(window.prompt("entrer la taille du tableau"))
var tab= new Array(n)
var pgn=0;
var posi=0;
for( var i=0; i<tab.length; i++)
{ 
    
    var tmp=window.prompt("entrer un nombre");
    console.log(tmp)
    if(tmp>pgn)
    {
        
        posi=i;
        pgn=tmp;
    }
   
}
document.write("le plus grand nombre est:"," ",pgn," ","et sa position est:"," ",posi)