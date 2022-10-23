gXMLBuffer ="<?xml version=\"1.0\" encoding=\"utf-8\" ?><data>   <entry name=\"policy\" value=\"A rule defined in policy bundle&#160;to control information use in an organization. A rule designed to control information use in an organization. Policies consist of components&#160;combined with logical operators, variables such as obligations, and time-based contexts.\" />   <entry name=\"Policy Administration Point\" value=\"The CloudAz server.\" />   <entry name=\"policy bundle\" value=\"The set of policies and required component definitions that are defined and active for each enforcer running in the system. Each enforcer has only one bundle stored locally at any one time, and it contains all the information it requires for all policies currently deployed to it. Every heartbeat interval, each enforcer contacts the CloudAz&#160;inquiring if there are any new or updated policies that should be deployed to that enforcer; if there are, the CloudAz&#160;sends a new bundle that overwrites the one currently deployed there.\" />   <entry name=\"policy component\" value=\"See components.\" />   <entry name=\"Policy Decision Point (PDP)\" value=\"The entity that evaluates applicable policies and computes authorization decisions. CloudAz comes with a preconfigured set of PDPs (Policy Decision Points), which supports standards-based interaction REST APIs to make authorization requests. The PDPs evaluate deployed authorization policies at runtime against incoming requests, and return authorization decisions to PEPs (Policy Enforcement Points).\" />   <entry name=\"Policy Enforcement Point (PEP)\" value=\"The software component that performs access control by making authorization requests to PDPs (Policy Decision Points) and enforcing decisions.\" />   <entry name=\"Policy Information Point (PIP)\" value=\"The component that is the source of user, resource, and environment attributes. A PEP (Policy Enforcement Point) or PDP (Policy Decision Point) interacts with the PIP to obtain attributes. In an enterprise deployment, a typical PIP would be an LDAP server, HR database, or other data repository with license keys.\" />   <entry name=\"policy modeling\" value=\"The process of defining the metadata to represent actors (Subjects) requesting authorization for a given set of objects (Resources).\" />   <entry name=\"policy object\" value=\"A generic term sometimes used to refer to policies and policy components.\" />   <entry name=\"report query\" value=\"The group of filter settings available in the Reporter console&#160;that control how report content is extracted from the Activity Journal.\" />   <entry name=\"Report Server\" value=\"A major component of CloudAz that is responsible for storing, managing, and serving data on end-user activity and policy enforcement. This information is stored in the Activity Journal&#160;database. The Report Server is the back end of the Reporter console.\" />   <entry name=\"report settings\" value=\"The group of settings available in the Reporter console that control how reports are formatted.\" />   <entry name=\"Reporter console\" value=\"One of the user interfaces in CloudAz. The Reporter console&#160;is a web-based application used to create reports as well as monitor and track user activity. It is the front end of the Report Server.\" />   <entry name=\"reports\" value=\"The result of a query run on information stored in the Activity Journal, showing details related to information access and use and policy enforcement in the network. Reports can be displayed in detail (grid) format or as bar charts.\" />   <entry name=\"resource components\" value=\"Components that can be included in policy definitions. Resources, such as documents or servers, are the grammatical object of actions in the ACPL language.\" />   <entry name=\"resource types\" value=\"The policy model templates that include information about attributes, actions, and obligations available to components and policies.\" />   <entry name=\"shared reports\" value=\"Reports that are available to multiple users. When reports are saved, they can be marked as shared. Shared reports appear on a separate tab in the Reporter console. See Saving reports.\" />   <entry name=\"states\" value=\"The current status of a policy or a component. There are seven possible states: Editing, Submit­ted for Deployment, Pending Deployment, Deployed, Deactivated, and Deleted. An object’s state determines the actions that can be performed on it.\" />   <entry name=\"system details\" value=\"The Dashboard widget that displays details about the configuration of the system. It shows how many Cloud PDPs are currently active, and how many Audit records are currently stored. It also provides subscription details.\" />  </data>";