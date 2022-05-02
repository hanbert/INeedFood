auto.waitFor()
const appName = "山姆会员商店";
launchApp(appName);
sleep(3000);

const start = () => {
	click('点击展开更多无货商品')
	var goods = id('layout_goods_details').find()
	if (goods.nonEmpty()) {
		goods.forEach(
			(good) => {
				var child1text = good.child(1).text()
				var child2text = good.child(2).text()
				var goodTitle = child1text ? child1text : child2text
				toastLog('遍历商品:' + goodTitle)
				if (goodTitle.indexOf('鸡翅中') >= 0) {
					if (child1text) {
						toastLog('找到商品:' + good.child(1).text())
						good.child(5).click()
					} else if (child2text) {
						toastLog('加购物车:' + good.child(2).text())
						good.child(6).click()
					}
				}
			}
		)
	}
}
start()
