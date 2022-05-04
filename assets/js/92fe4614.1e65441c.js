"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4017],{31533:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return m},default:function(){return d}});var i=a(87462),o=a(63366),s=(a(67294),a(3905)),n=["components"],r={title:"Why We Choose TiDB to Support OSS Insight",date:new Date("2022-05-02T00:00:00.000Z"),authors:["ilovesoup"]},l=void 0,c={permalink:"/blog/why-we-choose-tidb-support-oss-insight",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/why-we-choose-tidb-support-oss-insight.md",source:"@site/blog/why-we-choose-tidb-support-oss-insight.md",title:"Why We Choose TiDB to Support OSS Insight",description:"Many times we hope that our data access becomes more real-time. It means different for various industries: for logistics, it means that resource allocation can be carried out with a faster frequency; for e-commerce, it means quicker adjustment on promotion strategies based on sales information; for finance, it leads to faster risk management and more timely stop losses.",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[],readingTime:4.485,truncated:!1,authors:[{name:"ilovesoup",title:"PMM of PingCAP",url:"https://github.com/ilovesoup",imageURL:"https://github.com/ilovesoup.png",key:"ilovesoup"}],prevItem:{title:"Explore Deep in 4.6 Billion GitHub Events",permalink:"/blog/2022/05/03/explore-deep-in-4.6-billion-github-events"},nextItem:{title:"Use TiDB Cloud to Analyze GitHub Events in 5 Minutes",permalink:"/blog/try-it-yourself"}},h={authorsImageUrls:[void 0]},m=[],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Many times we hope that our data access becomes more real-time. It means different for various industries: for logistics, it means that resource allocation can be carried out with a faster frequency; for e-commerce, it means quicker adjustment on promotion strategies based on sales information; for finance, it leads to faster risk management and more timely stop losses."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(38879).Z})),(0,s.kt)("p",null,"For developers, it means realtime insights on topics like the latest and hottest projects in the community, the organizations that contribute the most, the programming languages that are used the most, etc.; or, you want to know more personal information, such as what projects are your friends contributing recently, who are contributors to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb/?utm_source=ossinsight"},"TiDB")," 's most recent PR, etc. Moreover, you want all these in real time."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(83643).Z})),(0,s.kt)("p",null,"Fortunately, the ",(0,s.kt)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GH Archive")," provides you the basic data to answer these questions. All you need is a database supporting these query. So simple!"),(0,s.kt)("p",null,'In fact, if you think about it carefully, you might find that not easy: you want the system to provide summary statistics of a large amount of data, such as the hottest language ranking in the figure above, as well as a large number of concurrent accesses to individual accounts. You might need two systems: one of them focuses on high-concurrency detailed data services, while the other requires insight reports based on a large amount of data. Regardless of Github insights, you might encounter similar problems in your daily work. For example, if you are building a operational gaming data service system, you might face the customer inquery request: "I just looted the sword of infinity, but I can\'t find it in my backpack now!" You need to quickly locate the loot data of that unlucky player from large volume of records to get a clue of the situation. Did he accidentally destroyed the sword? Is it ninjaed? Does the bored player simply want a chat with GMs? At the mean time, the operation team is also urging: "For the recently launched class Night Lord, please give me the latest damage statistics immediately. I suspect that the Dark Hammer skill is too imba and need a nerf immediately."'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"These all require your database to achieve all together:")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Looking for a needle in a haystack")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Quick analytical insights for massive data")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Realtime updates"))),(0,s.kt)("p",null,"In the past, for massive detailed data services, you could choose NoSQL or data sharding. NoSQL is a popular choice for massive hot data storage, but its disadvantages are also quite obvious: you cannot use SQL to express complex semantics, and it also lacks a proper indexing mechanism to locate data through dimensions other than the primary key; at the meantime, data sharding is quite cumbersome. Scaling the cluster as well as desining the partition key takes you a lot of effort. Moreover, for analytical services , you might need to deploy a dedicated analytical database in addition, and take care of the real-time ETL pipeline. For a small number of mission critical applications, you just grit your teeth and do it. But for the increasingly complex needs of analytics and data services, is it worthy."),(0,s.kt)("p",null,"In the selection, you want a solution with the SQL capabilities of traditional databases, mature indexing mechanism, real-time reporting ability and scalability."),(0,s.kt)("p",null,"Yes, ",(0,s.kt)("a",{parentName:"p",href:"https://en.pingcap.com/?utm_source=ossinsight"},"TiDB")," has them all."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\ud83d\udca1 You can read ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://docs.pingcap.com/tidb/stable/overview?utm_source=ossinsight"},"TiDB Documentation"))," to get more useful infomation."))),(0,s.kt)("p",null,"As an HTAP database, TiDB has both complete transactions support and high performance analytics at ease. When users want to locate detailed data (such as querying the latest commit records via github ID or affiliated organization), you can build fine-grained indexes for multiple dimensions for fast locating and high concurrency; at the same time,  TiDB's analytics engine, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/tiflash-overview?utm_source=ossinsight"},"TiFlash"),' , has built-in support for high-frequency updates. A column storage system (yes, even transactional updates of hundreds of thousands of TPS) that allows data to be seamlessly synchronized in real-time for analysis. Users only need to submit SQL queries without caring about the types of query, and the optimizer will automatically choose the optimal way to evaluate. In fact, it may not be possible for you to precisely distinguish which engine is more suitable. Consider quering for an individual organization: if it is a small organization with three or five people, the Github events since its creation may not exceed 10,000; while for giants like Microsoft and Alibaba, the difference on data volume is in orders of magnitude. In such case, the choice of engines becomes quite subtle, let alone separate the workloads in different databases. For TiDB, the choice is automatic: through statistical estimation, TiDB can "guess" the amount of data accessed and combine it with a cost model to find the most appropriate way to execute.'),(0,s.kt)("p",null,"In fact, in addition to interesting projects like OSS Insight, TiDB has a wide range of applications in similar real-time data insights and services, such as history order serving , advertising , risk management, datahub, logistics tracking and etc."),(0,s.kt)("p",null,"Unleashing the value of real-time data has become more and more important, and hope ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/overview?utm_source=ossinsight"},"TiDB")," can lend you a helping hand."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h3",{parentName:"div",id:"-details-in-how-oss-insight-works"},"\ud83c\udf1f Details in how OSS Insight works"),(0,s.kt)("p",{parentName:"div"},"Go to read ",(0,s.kt)("a",{parentName:"p",href:"https://ossinsight.io/blog/try-it-yourself"},"Use TiDB Cloud to Analyze GitHub Events in 5 Minutes")," and use the ",(0,s.kt)("a",{parentName:"p",href:"https://tidbcloud.com/signup?utm_source=ossinsight"},"Developer Tier")," ",(0,s.kt)("strong",{parentName:"p"},"free")," for 1 year."),(0,s.kt)("p",{parentName:"div"},"You can find how we deal with massive github data in ",(0,s.kt)("a",{parentName:"p",href:"https://ossinsight.io/blog/how-it-works"},"Data Preparation for Analytics")," as well!"))))}d.isMDXComponent=!0},38879:function(e,t,a){t.Z=a.p+"assets/images/scenerios-60a1efe8a4bfcc39e1c43cbcf237ab23.png"},83643:function(e,t,a){t.Z=a.p+"assets/images/top5-languages-d380c582c51a42a2390fdf6dc97ed239.png"}}]);