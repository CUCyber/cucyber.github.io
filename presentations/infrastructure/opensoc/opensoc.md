# OpenSOC

Foster McLane



# What is it?


## Basics

OpenSOC is a big data sercurity analytics framework for aggregating, analyzing, and monitoring network traffic and machine data.


## Platform

OpenSOC uses the Hadoop ecosystem to do processing at scale and is backed by Elastic Search with a modified version of their Kibana front-end.


## Capabilities

* Anomaly detection and real-time rules-based alerts for any telemetry stream
* Telemetry correlation and SQL query capability for data stored in Hadoop backed by Hive
* Automated real-time indexing for telemetry streams backed by Elastic Search
* Continued...


## Capabilities

* Hadoop-backed storage for telemetry stream with a customizable retention time
* Extensible enrichment framework for any telemetry stream
* Extensible spouts and parsers for attaching OpenSOC to monitor any telemetry source
* ODBC/JDBC compatibility and integration with existing analytics tools



# What are the benefits?


## Analytics

* Performs automatic anomaly detection and predictive modeling
* Aids in interactive correlation of a wide variety structured to unstructured data sources


## Speed

* Real-time alerts and indexing
* Quickly query and correlate very large amounts of data


## Scalability

* Being backed by Hadoop, OpenSOC scales out very well
* With the power of Palmetto's Cypress, we have a very large scale platform already


## One Place

* Provides one place to store, analyze, and query data
* Does correlation of just about any data thrown at it



# Isn't this what Splunk does?


## Yes, to an extent

OpenSOC has a lot of overlap in features with Splunk as they both do alerts, analytics, and queries.

OpenSOC, however, does more advanced anomaly detection and can do computation and queries on extremely large datasets within seconds.


## Does one replace the other?

Despite the overlap, we can still use OpenSOC to our advantage even if we decide to use Splunk over OpenSOC for the overlapping parts.


## Big data is the difference that matters

As a university, we generate a lot of data, but our current techniques do not even search through all of the data we generate. We are missing full packet capture for example.


## Unification also matters

For a particular incident we use anywhere between 1 and 7 data sources (despite already having Splunk) and we must manually convert data to correlate between the sources. OpenSOC coupled with Splunk has the power to basically unite all of these without much effort.



# Recap


## OpenSOC brings quite a few useful features


* Does anomaly detection and predictive modeling


* Scales to as much data as the university can generate using Palmetto's Cypress


* Powerful correlations between structured to unstructured data


* Supports most of our data sources already and more can be added with relative ease


* Hadoop, Storm, and friends on Cypress have unparalleled speed compared to any solution we choose



# Questions?
