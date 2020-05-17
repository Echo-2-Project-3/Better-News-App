
// import $ from "jquery";

// function handleEyes(event) {
//     var eye = $(".eye");
//     console.log("eyeye: ", eye);
//     var x, y, rad, rot;
//     let eye_offset = eye.offset();
//     if (eye_offset) {
//       x = eye_offset.left + eye.width() / 2;
//       y = eye_offset.top + eye.height() / 2;
//       rad = Math.atan2(event.pageX - x, event.pageY - y);
//       rot = rad * (180 / Math.PI) * -1 + 180;
//       eye.css({
//         "-webkit-transform": "rotate(" + rot + "deg)",
//         "-moz-transform": "rotate(" + rot + "deg)",
//         "-ms-transform": "rotate(" + rot + "deg)",
//         transform: "rotate(" + rot + "deg)",
//       });
//     }
//   }
  
//   $("#root").on('mousemove', handleEyes);


// $("body").mousemove(function(event) {
//     var eye2 = $(".eye2");
//     var x = (eye2.offset().left) + (eye2.width() / 2);
//     var y = (eye2.offset().top) + (eye2.height() / 2);
//     var rad = Math.atan2(event.pageX - x, event.pageY - y);
//     var rot = (rad * (180 / Math.PI) * -1) + 90;
//     eye2.css({
//       '-webkit-transform': 'rotate(' + rot + 'deg)',
//       '-moz-transform': 'rotate(' + rot + 'deg)',
//       '-ms-transform': 'rotate(' + rot + 'deg)',
//       'transform': 'rotate(' + rot + 'deg)'
//     });
//   });