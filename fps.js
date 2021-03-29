//显示动画的div
var animateDiv = document.getElementById('div');
//用于延迟的Button
var delayButton = document.getElementById('zuse');
//显示Fps
function showFps(){
  //fps显示容器
  var fpsShower = document.getElementById('fps');
  var lastTime = 0;
  function render(timeStamp){
    var period = timeStamp - lastTime;
    lastTime = timeStamp;
    fpsShower.innerHTML = `${parseInt(1000/period)+1} fps`;
    var time = Date.now();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
  var observer = new PerformanceObserver(function(list) {
    console.log(list);
      var perfEntries = list.getEntries();
      for (var i = 0; i < perfEntries.length; i++) {
          console.log("frame: ", perfEntries[i]);
      }
  });
  console.log(observer);
  
  // subscribe to Frame Timing
  observer.observe({entryTypes: ['frame']});
}
showFps();

delayButton.addEventListener('click',function(){
  var e = performance.now() + 5000;
  while (performance.now() < e) {

  }
});

// window.requestIdleCallback(()=>{

// });
