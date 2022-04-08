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
		} else if (hasText('我知道了')) {
			clickSettle('我知道了')
			sleep(500)
		} else if (hasText('返回购物车') || hasText('站点自提')) {
			back()
			sleep(500)
		} else if (hasText('重新加载')) {
			clickSettle('重新加载')
			sleep(500)
		} else if(hasText('选择收货地址')) {
			back()
			sleep(500)
		} else if (hasText('立即支付')) {
			clickSettle('立即支付')
			sleep(500)
			className("android.widget.TextView").text("我知道了").findOnce().parent().click()
			sleep(500)
		} else if (hasText('确认支付')) {
			isSuccess = true
			sleep(500)
		} else if (!hasText('结算')) {
			className("android.widget.TextView").text("我常买").findOne().parent().click()
			className("android.widget.TextView").text("购物车").findOne().parent().click()
			sleep(500)
		}
	}
}
start()

