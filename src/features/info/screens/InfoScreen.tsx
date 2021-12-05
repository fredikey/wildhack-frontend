import React from 'react'
import { CardList } from '../components/CardList'
import { IInfo } from '../models/Info'

const infoItems: IInfo[] = [
	{
		title: 'Постановка в график',
		text:
			'График Ваших волонтерских работ совпадает со сроками, указанными в договоре.\n' +
			'  \n' +
			'  Минимальный срок работы – 3 недели.\n' +
			'\n' +
			'График на сезон разместят на сайте www.kronoki.ru, раздел «Волонтерство» → «Волонтерство на территориях».'
	},
	{
		title: 'Подготовка к путешествию',
		text:
			'Вам понадобятся спальник, коврик, налобный фонарик, термос, биоразлагаемые средства личной гигиены, репелленты и, в зависимости от кордона, личная посуда.\n' +
			'\n' +
			'  Из гардероба возьмите:\n' +
			'\n' +
			'  - «Болотники» – высокие резиновые сапоги\n' +
			'- Теплые, водоотталкивающие одежду и обувь\n' +
			'- Легкую одежду. В теплые дни ходить в купальнике и коротких шортах нельзя'
	},
	{
		title: 'Связь и электричество',
		text:
			'Есть возможность зарядить гаджеты – кордоны оборудованы электрогенераторами и солнечными батареями.\n' +
			'\n' +
			'Сотовой связи нет, но утром и вечером на многих кордонах работает медленный интернет.'
	},
	{
		title: 'Здоровье',
		text:
			'Самостоятельно оформите страхование здоровья и жизни и сделайте ПЦР-тест на COVID-19. Приветствуются медицинские справки о состоянии здоровья.\n' +
			'\n' +
			'  Также не забудьте личную аптечку, штатных врачей на кордонах нет.'
	},
	{
		title: 'Питание',
		text: 'Заповедник обеспечит Вас основными продуктами. Остальное докупается самостоятельно – фрукты, овощи, кондитерские изделия и молочная продукция.',
		short: true
	},
	{
		title: 'Проживание и условия',
		text:
			'Волонтеры живут в домиках или сборных сезонных конструкциях – модулях. Спят в спальниках или на раскладушках. Также есть баня/душ, можно стирать и сушить вещи.\n' +
			'\n' +
			'  Если вы участвуете в работах по прочистке троп, то ночевать будете в палатках или инспекторских домах на полевых стационарах.\n'
	},
	{
		title: 'Документы',
		text:
			'❗️Это важный раздел, прочитай его внимательно.\n' +
			'\n' +
			'  Для оформления и подписания необходимых документов, а также выдачи разрешения для посещения ООПТ нужно приехать в офис. Адрес: Елизово, ул. Рябикова, д. 48. Все документы подписываются до отправки на кордон.\n' +
			'\n' +
			'  Не забудьте взять с собой паспорт.\n' +
			'\n' +
			'  Если Вы не сможете посетить офис – сообщите нам заранее. После этого мы дистанционно заключим договор, вы отправите цветные сканы документов. После окончания работ нужно будет все-таки подписать оригиналы документов.\n' +
			'\n' +
			'  Перечень документов:\n' +
			'\n' +
			'  - Договор о добровольческой деятельности в 2-х экземплярах\n' +
			'- Правила пожарной безопасности\n' +
			'- Инструкция при встрече с белым медведем\n' +
			'- Правила санитарной безопасности в лесах\n' +
			'- Соглашение о соблюдении волонтером информационной политики Кроноцкого заповедника в области социальных сетей\n' +
			'- Ведомость о списании продуктов'
	},
	{
		title: 'Отправка на кордон',
		text:
			'Есть три варианта добраться до кордона: вертолет, вахтовка и маломерное судно. Способ определяется в зависимости от кордона.\n' +
			'\n' +
			'  Время ожидания отправки – от двух суток до двух недель.'
	},
	{
		title: 'Ожидание отправки',
		text:
			'В вертолете не всегда есть свободное место, поэтому конкретного срока отправки нет. Учитывайте это при планировании времени и бюджета.\n' +
			'\n' +
			'  Мы поможем Вам в размещении в одном из хостелов Елизово или Петропавловска-Камчатского.'
	},
	{
		title: 'Работа на территориях',
		text:
			'Волонтер обязан выполнять работы, указанные в договоре. Руководитель кордона распределяет нагрузку так, чтобы каждый смог побывать на экскурсии.\n' +
			'\n' +
			'  При нарушении договора доброволец самостоятельно за свой счет должен покинуть кордон.'
	},
	{
		title: 'Отзыв и отчет',
		text:
			'\n' +
			'После работы на кордоне волонтер должен написать отзыв и отчет добровольца – приложения №4 и №5 к договору.\n' +
			'\n' +
			'  Также в волонтерскую книжку ставятся дата и сведения о деятельности. Если волонтерской книжки у добровольца нет, ее сделают.\n'
	},
	{
		title: 'Отели в Елизово',
		text:
			'- Мини-отель «АМТО»\n' +
			'Адрес: 684300, ул. Ленина, дом 32\n' +
			'Телефон: 8 (924) 585-35-35\n' +
			'Стоимость от 1500 рублей\n' +
			'\n' +
			'- Вила Хостел\n' +
			'Адрес: 684007, ул. Уральская, дом 2\n' +
			'Телефон: 8 (963) 833-22-32\n' +
			'Стоимость от 2000 рублей\n' +
			'\n' +
			'- Хостел Камчатский Стиль\n' +
			'Адрес: 684000, ул. Беринга, дом 26\n' +
			'Телефон: 8 (951) 290-67-42\n' +
			'Стоимость от 3000 рублей\n' +
			'\n' +
			'- Гостиница «Арт Отель»\n' +
			'Адрес: 684000, ул. Виталия Кручины, дом 3\n' +
			'Телефон: 8 (415) 317-14-43\n' +
			'Стоимость от 6500 рублей\n' +
			'\n' +
			'- Yu Hotel\n' +
			'Адрес: 684000, ул. Виталия Кручины, дом 38А\n' +
			'Телефон: 8 (914) 021-27-27\n' +
			'Стоимость от 8000 рублей\n' +
			'\n' +
			'- Forest Hotel\n' +
			'Адрес: 684000, Геофизическая ул., дом 9А, этаж 3\n' +
			'Телефон: 8 (924) 698-55-55\n' +
			'Стоимость от 3000 рублей\n' +
			'\n' +
			'- Аэро Отель\n' +
			'Адрес: 684010, ул. Магистральная, 44В\n' +
			'Телефон: 8 (963) 833-44-00\n' +
			'Стоимость от 4500 рублей'
	},
	{
		title: 'Кордоны',
		text:
			'Озерный\n' +
			'На кордоне «Озерный» построены две кухни, где есть холодильник, газовая плита и холодная вода. Вода нагревается только для душа и бани. На территории есть генератор, работающий днем. Два домика для размещения инспекторов. Четыре туалета. В инспекторском домике есть стиральная машина, душевая и баня. Неподалеку от кордона располагается база Камчат-НИРО – Камчатский научно-исследовательский институт рыбного хозяйства и океанографии.\n' +
			'В одной кухне-столовой трудятся повара туристических групп, а туристы принимают пищу и проводят свободное время. На второй кухне повар готовит для добровольцев и сотрудников заповедника. На кухне есть все необходимое для приготовления и приема пищи, личную посуду с собой можно не брать. Для себя, вы можете взять некий запас еды (шоколад, печенье, кофе, орехи, конфеты). Самому себе готовить нельзя из-за рационального использования электричества и газа.\n' +
			'Кордон огорожен электро-забором, все время вы будете проводить на ограниченной территории. Выйти за ограждение возможно только в сопровождении инспектора с оружием, так как рядом проходят медвежьи тропы. На кордоне волонтеры живут в полевых условиях. Есть возможность размещения в инспекторском домике при наличии свободных мест, но лучше взять с собой палатку. Так же необходимо взять спальник, коврик и все необходимое для жизни в палатке.\n' +
			'\n' +
			'Травяной\n' +
			'Кордон «Травяной» отличается от кордона «Озерный» количеством туристов, в первую очередь. В течение сезона одна группа сменяет другую. Кордон исключает массовое количество посетителей, так как однодневные эколого-познавательные экскурсии здесь не проводятся.\n' +
			'Инфраструктура на кордоне подходит для длительного и комфортного проживания. Есть инспекторский дом, вип-дом для проживания туристов, баня, санузел. Снаряжение для палаточного проживания здесь не нужны.\n' +
			'\n' +
			'Долина гейзеров\n' +
			'Кордон функционирует с апреля по октябрь. Инфраструктура Долины установлена таким образом, чтобы минимально воздействовать на хрупкую экосистему.\n' +
			'На кордоне есть:\n' +
			'  - визит-центр, который вмещает кухню-столовую, сувенирную лавку и комнаты для размещения туристов и персонала\n' +
			'  - инспекторский дом, дом для проживания волонтеров и работников заповедника\n' +
			'  - туалеты и душевая\n' +
			'\n' +
			'Есть холодная вода, не пригодная для питья. Питьевая вода привозится на кордон вертолетом или приносится из ручья. Есть стиральная машина.\n' +
			'На кухне трудится повар заповедника, который готовит еду для государственных инспекторов и добровольцев. На кухне есть все необходимое для приготовления и приема пищи. Есть генератор, который работает несколько часов.\n' +
			'Также функционирует спутниковый интернет, но используется он в нуждах связи государственных инспекторов с администрацией заповедника. Вы можете воспользоваться интернетом для связи с родными, но не злоупотреблять им.\n' +
			'\n' +
			'Узон\n' +
			'Находится в 10 минутах лета от Долины гейзеров. Немного отличается инфраструктура. На этом кордоне нет повара, поэтому приготовлением пищи занимаются добровольцы.\n' +
			'\n' +
			'Исток и аэродром\n' +
			'На кордонах есть все необходимое для проживания: жилые модули и инспекторские дома, генераторы, холодное водоснабжение (с технической водой), туалеты, бани. Кухни-столовые оснащены всем необходимым для приготовления и приема пищи. Есть спутниковый интернет.\n' +
			'\n' +
			'Кроноки и Семячик\n' +
			'Так как туристы практически не посещают данные кордоны, они используются лишь в природоохранных и научных целях. Здесь проживают сотрудники заповедника, которым нужна помощь в хозяйственных и строительных работах. Инфраструктура и хозяйственное наполнение кордонов подходит для длительного проживания. Есть жилые инспекторские дома, санузлы.\n'
	}
]

export const InfoScreen = () => {
	return <CardList title="Информация" items={infoItems} />
}
