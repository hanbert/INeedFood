auto.waitFor()
const appName = "美团";
launchApp(appName);
sleep(3000);
// 点击按钮
const clickSettle = (text) => {
	className("android.widget.TextView").textStartsWith(text).findOne().parent().click()
	// textStartsWith(text).findOne().click()
}
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
		if (hasText('结算')) {
			clickSettle('结算')
			sleep(1000)
		} else if (hasText('我知道了') || hasText('返回购物车') || hasText('站点自提')) {
			back()
			sleep(500)
		} else if (hasText('重新加载')) {
			clickSettle('重新加载')
			sleep(50)
		} else if (hasText('提交订单')) {
			var flag = className("android.widget.TextView").textStartsWith('提交订单').findOne().parent().click()
			var sendTime = textStartsWith("1").findOnce();
			if (sendTime) {
				sendTime.parent().click()
			} else {
				back()
			}
			while(!flag) {
				flag = className("android.widget.TextView").textStartsWith('提交订单').findOne().parent().click()
			}
			sleep(500)
		}
	}
}
start()

