var myObject = {
    a: {
        one: 1,
        two: 2,
        three: 3
    },
    b: [ 1, 2, 3 ]
};
var shallowTraditionEncoded = $.param( myObject, true );
var shallowEncoded = $.param( myObject, false );

console.log("---------------------param 结果--------------------------------------");
console.log("---------------------简单对象--------------------------------------");
console.log(decodeURIComponent($.param({one: 1, two: 2, three: 3})));
console.log(decodeURIComponent($.param({a: {one: 1, two: 2, three: 3}})));
console.log("-----------------------------------------------------------");
console.log("                                 ");
console.log("                                 ");


console.log("---------------------数组对象--------------------------------------");
console.log(decodeURIComponent($.param({ a: [ 2, 3, 4 ] })));
console.log("-----------------------------------------------------------");
console.log("                                 ");
console.log("                                 ");


console.log("---------------------混合对象--------------------------------------");
console.log("~~~~~~~~~~~~~~~~this is traditional true~~~~~~~~~~~~~~~~~~");
console.log(decodeURIComponent(shallowTraditionEncoded));
console.log("~~~~~~~~~~~~~~~~~this is traditional false~~~~~~~~~~~~~~~~~");
console.log(decodeURIComponent(shallowEncoded ));
console.log("-----------------------------------------------------------");

console.log(decodeURIComponent($.param({ a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ]})));
console.log("-------------------------------------------------------------");

console.log(decodeURIComponent($.param({ a: { b: 1, c: 2 }, d: [ 3, [ 1, 2, { f: 7 } ], { e: 5 } ]})));
console.log("-------------------------------------------------------------");
console.log("                                 ");
console.log("                                 ");




