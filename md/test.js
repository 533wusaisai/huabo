{
	/* <script type="text/javascript"> */
}
function checkViewport() {
	if (window.innerWidth <= 768) {
		window.location.href = "https://www.m.tjhuabo.cn"; // 移动端网站的URL
	}
}

// 当窗口被调整大小时执行
window.onresize = checkViewport;

// 页面加载时执行一次
checkViewport();
{
	/* </script> */
}
