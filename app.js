
const csv = require('csv-parser');
const fs = require('fs');
//const writeStream = fs.createWriteStream("output.csv");
var cvert = require("colorvert");

///var rgb = require("colorvert/cmyk/rgb");
var pracs = [];
var strPraccolor;
////var { parse } = require("csv-parse");
//////var parser = parse({ columns: true }, function (err, records) {
//////    console.log(records);
//////});


// CMYK, XYZ, and Lab-based conversions require
// you to provide a callback function.
//cvert.cmyk_to_rgb(100, 0, 0, 0, function (err, rgb) {
//	console.log(rgb);
//});

var err;
fs.createReadStream('cmyk_rgb_colors.csv')
    .pipe(csv())
    .on("data", function (row) {
        strPraccolor = `${row["praccolor"]}`;
        console.log(row);
        console.log(strPraccolor);

        //var transicc = require("transicc");

        //cvert.cmyk_to_rgb(100, 0, 0, 0, function ( err, rgb) {
        //    //if ( err ) throw ( err );
            
        //    console.log(rgb[0]);
        //    console.log(rgb[1]);
        //    console.log(rgb[2]);

        //    console.log(strPraccolor)
                          
        //});



        //const cmyk = row.praccolor;

        //cvert.cmyk_to_rgb(99, 86, 5, 0, function ( err, rgb ) {
        ////    row.rgbcolor = rgb

        //    //pracs.push(prac)

        //    console.log( rgb );
        //});


    })
    .on('end', () => {


        console.log('CSV file successfully processed');
   });




////var fs = require('fs');
//var stringify = require('csv-stringify');

//stringify(data, {
//    header: true
//}, function (err, output) {
//    fs.writeFile(__dirname + '/someData.csv', output);
//})






////const inputFile = 'C:\Apps\cmyk_rgb_colors.csv';
////const CsvReader = require('promised-csv');

////function readCSV(inputFile) {
////    return new Promise((resolve, reject) => {

////        var reader = new CsvReader();
////        var output = [];

////        reader.on('row', data => {
////            // data is an array of data. You should
////            // concatenate it to the data set to compile it.
////            output = output.concat(data);
////        });

////        reader.on('done', () => {
////            // output will be the compiled data set.
////            resolve(output);
////        });

////        reader.on('error', err => reject(err));

////        reader.read(inputFile);

////    });
////}

////it("Should store the elements of the array", async () => {
////    var resultSet = await readCSV(inputFile);
////    console.log(resultSet);
////});




//////let results = [];
//////const csv = fs
//////    .createReadStream('C:\Apps\cmyk_rgb_colors.csv')
//////    .pipe(csv.default({ separator: ',' }))
//////    .on('data', (data) => {
//////        results.push(data);
//////    })
//////    .on('end', () => {
//////        console.log(results);
//////    });