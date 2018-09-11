##  项目介绍
### 一、项目定位：
	「小熊の旅行攻略」是一个提供旅游攻略信息的微信小程序。
	 这里有最系统、最专业、独一无二、全方位的旅行攻略。
### 二、项目类型：
    本程序是基于微信小程序开发，这个小程序的功能简单直接，方便各位旅行爱好者进行使用。
		
####   本人在「小熊の旅行攻略」app项目中主要负责：

####    1、前端页面的搭建：
		
			 时间安排：用时一周完成页面搭建。	
				
            （1）首页主入口：
									
					通过路由渲染，页面中的每一子组件配置相关详情页都给id，将id值传入路由参数中，点击可通过路由进入各自的相关详情页；
					例如：
                    先绑定点击事件获取相关id：再对路由进行配置
                    // 进入景点详情
                    enterDetail(e) {
                    	let sid = e.currentTarget.dataset.id;
                    	wx.navigateTo({
                    		url: 'view-detail/view-detail?sid=' + sid + ''
                    	})
                    },
                    然后在对应的组件（假设该组件的id为1）detail页面中请求id=1的数据并渲染。
										
										
            （2）目的地入口、发现入口：为单页面下有子页面。获取数据并渲染；
						
						
            （3）用户中心
							在用户中心拉取用户微信，并展示用户等级等信息
			
####    3、功能实现：
			页面之间的切换，点击进入查看详情。后续继续完善。
			在 小程序中 中，实现 Tab 切换主要方式：使用TabBar 。

			因为觉得项目需要多次使用同一个布局和样式,
			所以使用的是template（模板）来减少冗余代码。
			使用 template模板 基本过程可以概括为：
			在父组件中定义一个在文件夹里面新建一个wxml，wxss,进行模板和样式的定义，
			设置绑定模板的name，以及里面您需要定义的wxml内容，传入该 模板 组件名，
			最后引入在需要使用的页面使用import导入该wxml页面
			
			通过is判断使用哪个模板,这里我们使用name为A模板或B
			
			<template is="A" data="{{...item}}"></template>
			<template name="courseStudent">
				<!-- 此处渲染数据的时候就不需要使用 item.xxx了-->  
				<view>{{res}}</view>
			</template>
####    4、实现与后台数据的交互：   
			可从后台获取数据，并完整渲染到页面上。
            获取数据通过wx:require实现：
            wx.request({
							url: 'test.php', //仅为示例，并非真实的接口地址
							data: {
								 x: '' ,
								 y: ''
							},
							header: {
								'content-type': 'application/json' // 默认值
							},
							success: function(res) {
								console.log(res.data)
							}
						})
            最后通过{{source}}的或者<img :src=source.src>的方式渲染在页面上。

		
## 技术应用：
			小程序组件；
			tabBar：基于组件的路由器配置；
			swiper：基于小程序的轮播组件库；
			navigator：页面链接。
			lazy-load: 图片懒加载。只针对page与scroll-view下的image有效
			map：小程序预设原生地图组件;
			picker:  普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。
	
## 运行项目

### 克隆整个项目到本地
git clone https://github.com/fuckskyku/wechat_project.git

### 小程序查看演示

