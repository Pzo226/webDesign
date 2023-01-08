// Table data
    var data = [
        {id : 1,  name : " Static Website Design Layout", price : 100,},
        {id : 2, name : " CMS Website Design Layout", price : 150,},
        {id : 3, name : " Domain Name Registration (Yearly)",  price :100,},
        {id : 4, name : " Website Hosting (Yearly)", price : 500,},
        {id : 5, name : " SEO Search Engine Optimization", price : 100,},
        {id : 6, name : " Social Media Creation", price : 100,},
        {id : 7, name : " Email Services", price : 100,},
        {id : 8, name : " Support (FREE for 3 months)", price : 150,}

];
// Total price 
let sum = 0;

for(let i = 0; i < data.length; i++){
    sum += data[i].price
}

// Table for pricing 
    var k = '<tbody>'
    
    
    for(i = 0;i < data.length; i++){
        k+= '<tr>';
        k+= '<td>' + data[i].id + '. ' + data[i].name + '</td>';
        k+= '<td>' + data[i].price + '</td>';
        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
    document.getElementById('total').innerHTML = sum;
    
    

    

      
    
    
    