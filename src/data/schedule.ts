export type ScheduleDayType = "opening" | "software" | "machine-learning" | "security" | "closing";
export type ScheduleBlockPeriod = "上午" | "下午" | "晚上";
export type ScheduleEventCategory = "啟程" | "主線課程" | "實作交流" | "社群活動" | "收束";

export interface ScheduleMeta {
	title: string;
	description: string;
	note: string;
}

export interface ScheduleBlock {
	period: ScheduleBlockPeriod;
	eventIds: string[];
}

export interface ScheduleDay {
	id: string;
	title: string;
	subtitle: string;
	type: ScheduleDayType;
	blocks: ScheduleBlock[];
}

export interface ScheduleEvent {
	id: string;
	name: string;
	summary: string;
	description: string;
	category: ScheduleEventCategory;
	image: {
		src: string;
		alt: string;
	};
}

export const scheduleMeta: ScheduleMeta = {
	title: "活動日程搶先看",
	description: "SITCON Camp 2026 將圍繞軟體工程、機器學習與資訊安全三大主線展開，並穿插交流、實作與社群活動。",
	note: "三個主題日的實際順序與完整時段，將於正式課表公開時一併更新。"
};

export const scheduleEvents: ScheduleEvent[] = [
	{
		id: "check-in",
		name: "報到與營隊啟程",
		summary: "帶著行李與好奇心進入營隊。",
		description: "從踏進校園開始，五天四夜的節奏就慢慢展開。你會領到營隊需要的資訊，也會先熟悉接下來會一起生活與學習的環境。這段時間適合把緊張放下，準備和新的夥伴一起出發。",
		category: "啟程",
		image: { src: "/2026/images/schedule/check-in.svg", alt: "學員抵達 SITCON Camp 報到現場的插畫" }
	},
	{
		id: "opening",
		name: "開幕：進入 SITCON Camp",
		summary: "認識營隊，也認識這個社群。",
		description: "開幕會帶你看見 SITCON Camp 想創造的學習場域，以及這五天將如何圍繞資訊技術與學生社群展開。你不需要一開始就知道所有答案，只要帶著問題和願意動手的心情進來。",
		category: "啟程",
		image: { src: "/2026/images/schedule/opening.svg", alt: "SITCON Camp 開幕舞台與參與者的插畫" }
	},
	{
		id: "icebreaking",
		name: "不一樣的破冰",
		summary: "用資訊人的方式開始熟起來。",
		description: "破冰不是只為了記住名字，而是讓大家有機會交換想法、發現彼此的好奇心。你會在輕鬆的互動中找到可以一起討論、一起卡關、一起完成任務的夥伴。",
		category: "社群活動",
		image: { src: "/2026/images/schedule/icebreaking.svg", alt: "學員圍坐交流與互動的插畫" }
	},
	{
		id: "camp-guide",
		name: "Camp 生存指南",
		summary: "把五天的節奏先放進口袋。",
		description: "營隊生活會有課程、實作、交流與各種臨場發生的時刻。這段會整理你需要知道的資訊，讓你知道如何找到資源、如何和隊輔與夥伴合作，也如何在密集的五天裡照顧自己的步調。",
		category: "啟程",
		image: { src: "/2026/images/schedule/camp-guide.svg", alt: "營隊地圖與指南筆記的插畫" }
	},
	{
		id: "night-special",
		name: "夜間特別活動",
		summary: "白天之外，還有社群的另一面。",
		description: "夜晚會保留給更自由、更有營隊感的活動。可能是延伸白天的交流，也可能是讓大家從不同角度看見資訊社群的時間。重點不是形式，而是讓你有機會和人、技術與想法靠得更近。",
		category: "社群活動",
		image: { src: "/2026/images/schedule/night-special.svg", alt: "夜間活動中學員交流的插畫" }
	},
	{
		id: "software-main",
		name: "軟體工程主線課程",
		summary: "從會寫程式，走向把系統做穩。",
		description: "軟體工程主題會帶你思考專案如何從一段程式長成可以協作、維護與迭代的作品。課程會從實務經驗出發，讓你看見架構、品質與團隊溝通如何影響一個專案的生命。",
		category: "主線課程",
		image: { src: "/2026/images/schedule/software-main.svg", alt: "軟體工程課程與程式碼畫面的插畫" }
	},
	{
		id: "project-real",
		name: "把專案做成真的",
		summary: "把想法推進到能被使用的狀態。",
		description: "做出作品不只是在本機端跑起來，也包含需求取捨、錯誤處理、部署與維護。這段會陪你把專案放進更真實的情境裡看，理解完成度背後需要哪些工程判斷。",
		category: "實作交流",
		image: { src: "/2026/images/schedule/project-real.svg", alt: "學生協作完成專案看板的插畫" }
	},
	{
		id: "open-source",
		name: "開源協作與工程實務",
		summary: "理解多人一起寫程式的工作方式。",
		description: "開源不是只有把程式碼放上網，而是一套讓陌生人也能協作的文化與流程。你會接觸 issue、review、文件與溝通背後的思考，理解一個專案如何讓更多人參與進來。",
		category: "實作交流",
		image: { src: "/2026/images/schedule/open-source.svg", alt: "開源協作流程與程式分支的插畫" }
	},
	{
		id: "talk-with-tech-people",
		name: "和資訊人聊聊",
		summary: "把疑問帶到真實的經驗前面。",
		description: "資訊領域很大，每個人的路徑也都不太一樣。這段時間會讓你聽見不同背景的分享，從學習方法、專案經驗到社群參與，找到下一步可以嘗試的方向。",
		category: "社群活動",
		image: { src: "/2026/images/schedule/talk-with-tech-people.svg", alt: "資訊人與學員圍坐討論的插畫" }
	},
	{
		id: "ml-main",
		name: "機器學習主線課程",
		summary: "理解模型背後的資料與判斷。",
		description: "機器學習主題會從概念與實作之間搭橋，讓你看見資料、模型與評估如何一起構成一個 AI 應用。課程不只談工具，也會談如何提出問題、檢查結果與理解限制。",
		category: "主線課程",
		image: { src: "/2026/images/schedule/ml-main.svg", alt: "機器學習模型與資料視覺化的插畫" }
	},
	{
		id: "data-model-experiment",
		name: "資料、模型與實驗",
		summary: "練習讓實驗結果說話。",
		description: "一個模型好不好，常常取決於資料如何被理解，以及實驗如何被設計。這段會帶你用更工程化的眼光看待訓練與評估，學會從結果回頭調整假設。",
		category: "實作交流",
		image: { src: "/2026/images/schedule/data-model-experiment.svg", alt: "資料集、模型與實驗紀錄的插畫" }
	},
	{
		id: "ai-limits",
		name: "AI 應用與限制討論",
		summary: "看見能做什麼，也看見不能忽略什麼。",
		description: "AI 應用很迷人，但每一次使用都伴隨資料品質、偏誤、成本與責任的考量。這段會把技術放回真實情境裡討論，讓你練習用更完整的視角判斷一個應用是否合適。",
		category: "實作交流",
		image: { src: "/2026/images/schedule/ai-limits.svg", alt: "AI 應用討論與限制標記的插畫" }
	},
	{
		id: "security-main",
		name: "資安主線課程",
		summary: "從攻防視角理解系統安全。",
		description: "資安主題會帶你從攻擊者與防守者的角度重新看待系統。你會理解漏洞如何形成、風險如何被評估，也會看見安全思維如何成為開發過程的一部分。",
		category: "主線課程",
		image: { src: "/2026/images/schedule/security-main.svg", alt: "資訊安全課程與防護盾牌的插畫" }
	},
	{
		id: "attack-defense",
		name: "攻防思維與安全案例",
		summary: "用案例理解風險如何發生。",
		description: "真實的資安問題往往不是單一錯誤，而是多個環節一起累積出的結果。這段會透過案例拆解攻防思維，讓你更懂得如何觀察系統、追問假設與建立防線。",
		category: "實作交流",
		image: { src: "/2026/images/schedule/attack-defense.svg", alt: "攻防情境與安全分析筆記的插畫" }
	},
	{
		id: "security-field",
		name: "真實世界的資安現場",
		summary: "把安全議題放回日常與產業。",
		description: "資安不只存在於競賽題目，也存在於日常服務、組織流程與人和人的互動裡。這段會讓你看見安全工作面對的真實限制，以及技術之外需要一起考慮的因素。",
		category: "實作交流",
		image: { src: "/2026/images/schedule/security-field.svg", alt: "真實世界資安場景與系統節點的插畫" }
	},
	{
		id: "meet-sitcon-staff",
		name: "和 SITCON 工人面對面",
		summary: "聽見社群是怎麼被做出來的。",
		description: "SITCON 的活動來自許多學生與志工長時間的投入。這段會讓你更靠近幕後，看見社群如何運作、如何做決定，也如何讓一群人的熱情變成可以被更多人參與的活動。",
		category: "社群活動",
		image: { src: "/2026/images/schedule/meet-sitcon-staff.svg", alt: "SITCON 工人與學員交流的插畫" }
	},
	{
		id: "learning-wrap",
		name: "五天學習收束",
		summary: "整理帶得走的問題與答案。",
		description: "到了最後一天，我們會一起回頭整理這幾天學到的概念、完成的嘗試與還想繼續追的問題。收束不是結束，而是幫你把營隊經驗轉成下一段學習的起點。",
		category: "收束",
		image: { src: "/2026/images/schedule/learning-wrap.svg", alt: "學員整理五天學習筆記的插畫" }
	},
	{
		id: "community-exchange",
		name: "社群交流",
		summary: "把連結留到營隊之後。",
		description: "營隊中認識的人，可能會成為之後一起學習、一起做專案或一起參與社群的夥伴。這段時間會留給大家交換想法與聯絡方式，也把五天累積出的連結帶出去。",
		category: "社群活動",
		image: { src: "/2026/images/schedule/community-exchange.svg", alt: "學員交換想法與社群連結的插畫" }
	},
	{
		id: "group-photo",
		name: "大合照",
		summary: "把這次相遇留在同一張畫面裡。",
		description: "五天四夜會很快過去，但總會有一些時刻值得被留下。大合照是大家一起站進同一個畫面裡，也替這次共同完成的營隊經驗做一個明亮的記號。",
		category: "收束",
		image: { src: "/2026/images/schedule/group-photo.svg", alt: "SITCON Camp 全體大合照的插畫" }
	},
	{
		id: "closing",
		name: "閉幕與未來入口",
		summary: "從 Camp 回到更大的資訊社群。",
		description: "閉幕會把五天的故事收在一起，也把視線帶向營隊之後。你可以帶著作品、問題、朋友與新的方向回到日常，繼續在資訊社群裡探索自己的位置。",
		category: "收束",
		image: { src: "/2026/images/schedule/closing.svg", alt: "閉幕時學員望向未來入口的插畫" }
	}
];

export const scheduleDays: ScheduleDay[] = [
	{
		id: "camp-start",
		title: "營隊啟程",
		subtitle: "第一天",
		type: "opening",
		blocks: [
			{ period: "上午", eventIds: ["check-in", "opening"] },
			{ period: "下午", eventIds: ["icebreaking", "camp-guide"] },
			{ period: "晚上", eventIds: ["night-special"] }
		]
	},
	{
		id: "software-day",
		title: "軟體工程主題日",
		subtitle: "講師：待公布",
		type: "software",
		blocks: [
			{ period: "上午", eventIds: ["software-main"] },
			{ period: "下午", eventIds: ["project-real", "open-source"] },
			{ period: "晚上", eventIds: ["talk-with-tech-people"] }
		]
	},
	{
		id: "machine-learning-day",
		title: "機器學習主題日",
		subtitle: "講師：待公布",
		type: "machine-learning",
		blocks: [
			{ period: "上午", eventIds: ["ml-main"] },
			{ period: "下午", eventIds: ["data-model-experiment", "ai-limits"] },
			{ period: "晚上", eventIds: ["night-special"] }
		]
	},
	{
		id: "security-day",
		title: "資安主題日",
		subtitle: "講師：待公布",
		type: "security",
		blocks: [
			{ period: "上午", eventIds: ["security-main"] },
			{ period: "下午", eventIds: ["attack-defense", "security-field"] },
			{ period: "晚上", eventIds: ["meet-sitcon-staff"] }
		]
	},
	{
		id: "camp-close",
		title: "營隊收束",
		subtitle: "第五天",
		type: "closing",
		blocks: [
			{ period: "上午", eventIds: ["learning-wrap", "community-exchange"] },
			{ period: "下午", eventIds: ["group-photo", "closing"] },
			{ period: "晚上", eventIds: [] }
		]
	}
];
