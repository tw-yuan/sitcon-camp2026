export type ScheduleDayType = "opening" | "software" | "artificial-intelligence" | "security" | "closing";

export const schedulePeriods = ["上午", "下午", "晚上"] as const;

export type ScheduleBlockPeriod = (typeof schedulePeriods)[number];

export type ScheduleEventCategory = "啟程" | "主線課程" | "社群活動" | "收束";

export interface ScheduleMeta {
	title: string;
	description: string;
	note: string;
}

export interface ScheduleBlock {
	startPeriod: ScheduleBlockPeriod;
	span?: number;
	eventIds: string[];
}

export interface ScheduleDay {
	id: string;
	title: string;
	subtitle: string;
	type: ScheduleDayType;
	canMove: boolean;
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
	description: "SITCON Camp 2026 將圍繞軟體工程、人工智慧與資訊安全三大主線展開，並穿插交流、實作與社群活動。",
	note: "三個主題日的實際順序與完整時段，將於正式課表公開時一併更新。"
};

export const scheduleEvents: ScheduleEvent[] = [
	{
		id: "start-and-opening",
		name: "報到與開幕",
		summary: "帶著行李與好奇心，正式進入 SITCON Camp。",
		description:
			"從踏進營隊開始，五天四夜的節奏就慢慢展開。你會完成報到、熟悉環境，也會在開幕中認識 SITCON Camp 想創造的學習場域。這段時間會幫助學員理解接下來五天會如何圍繞資訊技術與學生社群展開，準備和新的夥伴一起出發。",
		category: "啟程",
		image: {
			src: "/2026/images/schedule/opening.svg",
			alt: "SITCON Camp 報到與開幕現場的插畫"
		}
	},
	{
		id: "icebreaking",
		name: "不一樣的破冰活動",
		summary: "用資訊人的方式開始熟起來。",
		description: "破冰不是只為了記住名字，而是讓大家有機會交換想法、發現彼此的好奇心。你會在輕鬆的互動中找到可以一起討論、一起卡關、一起完成任務的夥伴，也把自己慢慢放進五天的 Camp 節奏裡。",
		category: "社群活動",
		image: {
			src: "/2026/images/schedule/icebreaking.svg",
			alt: "學員圍坐交流與互動的插畫"
		}
	},
	{
		id: "night-special",
		name: "夜間特別活動",
		summary: "白天之外，還有社群的另一面。",
		description: "夜晚會保留給更自由、更有營隊感的活動。重點不是形式，而是讓你有機會和人、技術與想法靠得更近，在課程之外看見 SITCON Camp 更有溫度的一面。",
		category: "社群活動",
		image: {
			src: "/2026/images/schedule/night-special.svg",
			alt: "夜間活動中學員交流的插畫"
		}
	},
	{
		id: "software-main",
		name: "用軟體工程師的方法思考與協作",
		summary: "學會從混亂走向可維護、可協作的專案思維。",
		description:
			"軟體工程主題日的核心，是讓學員理解一個專案不只是把程式寫出來，而是要能被理解、被協作、被維護，並在需求變動時繼續前進。這一天會帶學員看見軟體工程師面對問題時的思考方式：如何整理混亂、拆解任務、溝通取捨，並讓團隊能一起把事情做下去。這不是單純學某個工具或框架，而是建立一種在資訊領域長期前進很重要的工程思維。對已經開始寫程式、但還不確定專案該怎麼變得更成熟的學員來說，這會是一個把「會寫」推向「會做」的重要入口。",
		category: "主線課程",
		image: {
			src: "/2026/images/schedule/software-main.svg",
			alt: "軟體工程課程與協作思考的插畫"
		}
	},
	{
		id: "ai-main",
		name: "AI 不是魔法，是垃圾進垃圾出",
		summary: "理解 AI 背後的資料、判斷與限制。",
		description:
			"人工智慧主題日的核心，是讓學員理解 AI 不是神奇黑盒，也不只是把工具拿來用。AI 的表現背後，牽涉到資料品質、問題定義、判斷方式與人如何檢查結果；當前面輸入的東西不可靠，後面產出的結果也很難真正值得信任。這一天希望幫助學員建立面對 AI 時更清楚的直覺：知道它為什麼看起來聰明，也知道它可能在哪裡出錯。對正在大量接觸 AI 工具的學生來說，這門課想帶走的不是追逐最新名詞，而是學會用更理性、更有判斷力的方式理解 AI。",
		category: "主線課程",
		image: {
			src: "/2026/images/schedule/ai-main.svg",
			alt: "人工智慧課程與資料判斷的插畫"
		}
	},
	{
		id: "security-main",
		name: "資安國手帶你進入攻防思維",
		summary: "由資安國手尤里衡帶領，看見系統安全的思考方式。",
		description:
			"資訊安全主題日將由資安國手尤里衡帶領，從真正站上競技場的經驗出發，帶學員靠近資安領域的思考方式。資安不只是找到漏洞或解出題目，更是在理解系統如何運作、哪裡可能失守，以及攻擊者與防禦者會如何看待同一個問題。這一天的重點，是讓學員看見安全思維為什麼是理解系統不可或缺的一部分，也讓對資安好奇的人有一個更具體、更有方向感的入口。透過國手的經驗與視角，學員能更直接感受到資安領域的深度、挑戰與吸引力。",
		category: "主線課程",
		image: {
			src: "/2026/images/schedule/security-main.svg",
			alt: "資訊安全課程與攻防思維的插畫"
		}
	},
	{
		id: "learning-wrap",
		name: "五天學習收束",
		summary: "整理帶得走的問題與方向。",
		description: "到了最後一天，我們會一起回頭整理這幾天學到的概念、完成的嘗試與還想繼續追的問題。收束不是結束，而是幫你把營隊經驗轉成下一段學習的起點。",
		category: "收束",
		image: {
			src: "/2026/images/schedule/learning-wrap.svg",
			alt: "學員整理五天學習筆記的插畫"
		}
	},
	{
		id: "closing",
		name: "閉幕與未來入口",
		summary: "從 Camp 回到更大的資訊社群。",
		description: "閉幕會把五天的故事收在一起，也把視線帶向營隊之後。你可以帶著問題、朋友與新的方向回到日常，繼續在資訊社群裡探索自己的位置。",
		category: "收束",
		image: {
			src: "/2026/images/schedule/closing.svg",
			alt: "閉幕時學員望向未來入口的插畫"
		}
	},
	{
		id: "departure",
		name: "賦歸",
		summary: "帶著新的問題、朋友與方向回到日常。",
		description: "營隊結束後，真正的探索才剛開始。你會帶著五天累積的經驗、認識的人、還想繼續追的問題回到日常，也可能因此開始下一段學習、專案或社群參與。",
		category: "收束",
		image: {
			src: "/2026/images/schedule/departure.svg",
			alt: "學員帶著行李離開營隊並準備展開下一段探索的插畫"
		}
	}
];

export const scheduleDays: ScheduleDay[] = [
	{
		id: "camp-start",
		title: "營隊啟程",
		subtitle: "第一天",
		type: "opening",
		canMove: false,
		blocks: [
			{ startPeriod: "上午", eventIds: ["start-and-opening"] },
			{ startPeriod: "下午", eventIds: ["icebreaking"] },
			{ startPeriod: "晚上", eventIds: ["night-special"] }
		]
	},
	{
		id: "software-day",
		title: "軟體工程主題日",
		subtitle: "用軟體工程師的方法思考與協作",
		type: "software",
		canMove: true,
		blocks: [
			{
				startPeriod: "上午",
				span: 3,
				eventIds: ["software-main"]
			}
		]
	},
	{
		id: "ai-day",
		title: "人工智慧主題日",
		subtitle: "AI 不是魔法，是垃圾進垃圾出",
		type: "artificial-intelligence",
		canMove: true,
		blocks: [
			{
				startPeriod: "上午",
				span: 3,
				eventIds: ["ai-main"]
			}
		]
	},
	{
		id: "security-day",
		title: "資訊安全主題日",
		subtitle: "資安國手尤里衡帶你進入攻防思維",
		type: "security",
		canMove: true,
		blocks: [
			{
				startPeriod: "上午",
				span: 3,
				eventIds: ["security-main"]
			}
		]
	},
	{
		id: "camp-close",
		title: "營隊收束",
		subtitle: "第五天",
		type: "closing",
		canMove: false,
		blocks: [
			{ startPeriod: "上午", eventIds: ["learning-wrap"] },
			{ startPeriod: "下午", eventIds: ["closing"] },
			{ startPeriod: "晚上", eventIds: ["departure"] }
		]
	}
];
