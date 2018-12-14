var conf_data = [
// {
//    "core/Q":"A",
//    "title":"35th IEEE International Conference on Data Engineering (ICDE 2019)",
//    "topics":`Benchmarking, Performance Modelling, and Tuning
// Data Integration, Metadata Management, and Interoperability
// Data Mining and Knowledge Discovery
// Data Models, Semantics, Query languages
// Data Provenance, cleaning, curation
// Data Science
// Data Stream Systems and Sensor Networks
// Data Visualization and Interactive Data Exploration
// Database Privacy, Security, and Trust
// Distributed, Parallel and P2P Data Management
// Graphs, RDF, Web Data and Social Networks
// Database technology for machine learning
// Modern Hardware and In-Memory Database Systems
// Query Processing, Indexing, and Optimization
// Search and Information extraction
// Strings, Texts, and Keyword Search
// Temporal, Spatial, Mobile and Multimedia
// Uncertain, Probabilistic Databases
// Workflows, Scientific Data Management`,
//    "type":"Conference",
//    "submission_date":"October 8, 2018",
//    "notification_date": "December 14, 2018",
//    "event_date":"April 8-12, 2019",
//    "comments":'<a href="http://conferences.cis.umac.mo/icde2019/?page_id=43"> website</a><br> This conference has two rounds of submissions.'
// },
// {
//    "core/Q":"A",
//    "title":"Extending Database Technology (EDBT)",
//    "topics":` Availability, reliability, and scalability
//         Big data storage, processing and transformation
//         Complex event processing and data streams
//         Concurrency control, recovery, and transaction management
//         Data management in clouds
//         <strong>Data mining and knowledge discovery</strong>
//         <strong>Data quality, curation, and provenance</strong>
//         Data warehousing, large-scale analytics and ETL tools
//         Emerging hardware and in-memory databases
//         Experiments and analysis
//         <strong>Graph databases and semantic web</strong>
//         Heterogeneous databases, data integration
//         Middleware and workflow management
//         Parallel, distributed and grid data management
//         Privacy, trust and security in databases
//         Query processing and optimization
//         Scientific and statistical databases
//         <strong>Semi-structured and linked data management</strong>
//         <strong>Sensor and mobile data management</strong>
//         Social networks and crowdsourcing
//         Spatial, temporal, and geographic databases
//         <strong>Text databases and information retrieval</strong>
//         Tuning, monitoring, benchmarking and performance evaluation
//         User interfaces and data visualization`,
//    "type":"Conference",
//    "submission_date":"October 8, 2018",
//    "event_date":"March 26-29, 2019",
//    "comments":'<a href="http://edbticdt2019.inesc-id.pt/?EDBT_CFP">website</a>'
// },
// {
//    "core/Q":"A*",
//    "title":"The 12th ACM International WSDM Conference on Web Search and Data Mining",
//    "topics":` Web Search
//    Adversarial search
// Algorithms and systems for Web-scale search
// Audio and touch interfaces to search
// Distributed search, metasearch, peer-to-peer search
// Indexing web content
// Local and mobile search
// Multimedia Web search
// Query analysis and query processing
// Search benchmarking and evaluation
// Search user behavior and log analysis
// Search user interfaces and interaction
// Searching social and real-time content
// Semantic search, faceted search, and knowledge graphs
// Sponsored search
// Task-driven search
// Vertical portals and search
// Voice search, conversational search, and dialog in search
// Web crawling
// Zero-query and implicit search
// Web Mining
// Algorithms and systems for Web-scale mining
// Clustering, classification, and summarization of Web data
// Data, entity, event, and relationship extraction
// Data extraction, integration and cleaning
// Discovery-driven Web and social network mining
// Geo and location data analysis
// Knowledge acquisition and automatic construction of knowledge bases
// Large-scale graph analysis
// Modeling trustworthiness and reliability of online information
// Multimodal data mining
// NLP for Web mining
// Online and streaming algorithms for Web data
// Opinion mining and sentiment analysis
// Web traffic and log analysis
// Web measurements, web evolution and web models
// Web recommender systems and algorithms
// Mobile Mining
// Neural architectures for Web search and mining
// Web search and data mining under privacy constraints
// Social Search, Mining and Other Applications
// Personal assistants, dialogue models, and conversational interaction
// Collaborative search and question answering
// Social network dynamics
// Human computation and crowdsourcing
// Influence and viral marketing in social networks
// Instant messaging and social networks
// Link prediction and community detection
// Location-based social networks
// Searching and mining crowd-generated data and collaboratively generated content
// Sampling, experiments, and evaluation in social networks
// Social media analysis: blogs and friendship networks
// Social network analysis, theories, models and applications
// Social reputation, influence, and trust
// Social tagging
// User activity modeling and exploitation
// Interpretable models of individual and social behavior
// Authors are explicitly discouraged from submitting papers that do not clearly present their contribution with respect to previous works, that contain only incremental results, and that do not provide significant advances over existing approaches..`,
//    "type":"Conference",
//    "submission_date":"8th of August, 2018",
//    "event_date":"11-15 of Feb, 2019",
//    "comments":'<a href="http://www.wsdm-conference.org/2019/">website</a>'
// },
// {
//    "core/Q":"A",
//    "title":"Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)",
//    "topics":"<strong>knowledge discovery</strong>, data mining, data warehousing, machine learning, artificial intelligence, databases, statistics, <strong>knowledge engineering</strong>, visualization, decision-making systems, ...",
//    "type":"Conference",
//    "submission_date":"October 10, 2018",
//    "event_date":"April 14-17, 2019",
//    "comments":'<a href="http://pakdd2019.medmeeting.org/Content/92892"> website</a>'
// },
// {
//    "core/Q":"A*",
//    "title":"TheWebConf (WWW)",
//    "topics":"Semantic Web, Ontology Engineering, Web in general",
//    "type":"Conference",
//    "submission_date":"Oct 29, 2018",
//    "event_date":"May 13-17, 2019",
//    "comments":'<a href="https://www2019.thewebconf.org/">website</a>'
// },
// {
//    "core/Q":" ",
//    "title":"Combining Machine Learning with Knowledge Engineering (AAAI-MAKE)",
//    "topics":` Knowledge Representation and Reasoning
//        Ontologies
//        Rule-based systems
//        Semantic Web
//        Machine Learning
//        Deep Learning
//        Neural Networks
//        Knowledge Engineering and Management
//        Causal Explainability
//        Learning and Cause & Effect Relationships
//        Learning Ontologies
//        Using Knowledge to Guide Machine Learning`,
//    "type":"Conference",
//    "submission_date":"2nd of November 2018",
//    "event_date":"25-27 of March 2019",
//    "comments":""
// },
// {
//    "core/Q":"Q1",
//    "title":"Semantic Web Journal (SWJ)",
//    "topics":"Special Issue on Semantic eScience: Methods, tools and applications",
//    "type":"Journal",
//    "submission_date":"16 November 2018",
//    "event_date":"",
//    "comments":"Special Issue"
// },
// {
//    "core/Q":"A",
//    "title":"Innovative Data Systems Research (CIDR)",
//    "topics":"database systems, storage management, transaction processing, cloud computing, massive data analysis, software service infrastructure, scalability and dependability, embedded and sensor databases, user interfaces, <strong>information integration</strong> and data cleaning architectures, <strong>information retrieval</strong>, declarative systems, data management in networks, benchmarking and experimental methodology, and databases for ML and ML for databases. We also welcome submissions on thought-provoking applications and emerging uses of data management technology.",
//    "type":"Conference",
//    "submission_date":"August 20, 2018",
//    "event_date":"January 13-16, 2019",
//    "comments":'<a href="http://cidrdb.org/cidr2019/"> website</a>'
// },
{
   "core/Q":"A",
   "title":"Extended Semantic Web Conference (ESWC)",
   "topics":"semantic web",
   "type":"Conference",
//   "submission_date":"03-12-2018",
//   "notification_date": "18-02-2019",
   "submission_date":"2018-12-03",
   "notification_date": "2019-02-18",
   "event_date":"",
   "comments":'<a href="https://2019.eswc-conferences.org/">website</a>'
},
{
   "core/Q":"A",
   "title":"International Semantic Web Conference (ISWC)",
   "topics":"semantic web",
   "type":"Conference",
//   "submission_date":"03-04-2019",
   "submission_date":"2019-04-03",
   "notification_date": "",
   "event_date":"",
   "comments":"<a href='https://iswc2019.semanticweb.org/'>website</a>"
},
{
   "core/Q":"B",
   "title":"Internation Conference on Web Engineering (ICWE)",
   "topics":"semantic web",
   "type":"Conference",
//   "submission_date":"18-01-2019",
   "submission_date":"2019-01-18",
   "notification_date": "",
   "event_date":"",
   "comments":""
},
{
   "core/Q":"B",
   "title":"International Conference on Software Engineering and Knowledge Engineering (SEKE)",
   "topics":"knowledge engineering",
   "type":"Conference",
//   "submission_date":"01-03-2019",
//   "notification_date": "20-04-2019",
//   "event_date":"10-07-2019",
   "submission_date":"2019-03-01",
   "notification_date": "2019-04-20",
   "event_date":"2019-07-10",
   "comments":"<a href='http://ksiresearchorg.ipage.com/seke/seke19.html'>website</a><br>Software Engineering, Artificial Intelligence, Agent-based systems, Data modeling and analytics, Knowledge engineering, Big data, Security, IOT, Smart learning"
},
{
   "core/Q":"A*",
   "title":"ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD)",
   "topics":"knowledge discovery",
   "type":"Conference",
   "submission_date":"2019-02-03",
   "notification_date": "2019-04-28",
   "event_date":"2019-05-17",
   "comments":"<a href='https://www.kdd.org/kdd2019'>website</a>"
},
]