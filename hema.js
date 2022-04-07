auto.waitFor()
const appName = "盒马";
launchApp(appName);
sleep(3000);
// 点击按钮
const clickSettle = (text) => {
	className("android.widget.TextView").textStartsWith(text).findOne().click()
}
// 点击父按钮
const clickParentSettle = (text) => {
	className("android.widget.TextView").textStartsWith(text).findOne().parent().click()
}
//选择配送时间
const selectTime = (text, count) => {
	sendTime = className("android.widget.TextView").textStartsWith('14:30').findOnce(count)
	return sendTime
}
//文本判断
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const musicNotify = () => {
	const m = '/storage/emulated/0/Music/大籽-白月光与朱砂痣.mp3'
	media.playMusic(m);
	sleep(media.getMusicDuration());
}

const start = () => {
	var isSuccess = false
	while (!isSuccess) {
		if (descStartsWith('盒区团购').exists()) {
			id("home_page_recycler_view").findOne().children().forEach(child => {
				var target = child.findOne(className("android.view.ViewGroup").desc("盒区团购"));
				if(target) {
					target.click();
				} else {
					toastLog('没有入口')
				}
			});
			sleep(1000)
		} else if (hasText('提价')) {

		} else {
			className("android.view.View").untilFind().click()
			var flag = bounds(33, 2196, 1047, 2356).click()
			if (flag) {
				isSuccess = true
			} else {
				back()
			}
			sleep(500)
		}
	}
}
start()

