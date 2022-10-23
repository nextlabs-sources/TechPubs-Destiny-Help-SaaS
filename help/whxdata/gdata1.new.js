(function() {
var glossary =  {"type":"data","entrys":[{"type":"entry","name":"ABAC","value":"Attribute based access control. ABAC uses attributes, or properties, such as information about the user or the environment, in authorization requests for access to assets. Access is allowed or denied based on policies. For more information, go to: https://nccoe.nist.gov/projects/building_blocks/attribute_based_access_control."},{"type":"entry","name":"Action components","value":"Components used to define actions in policies. Action components serve as the verbs in policies: read, copy, print, cut and paste, attach to email, and so on. After they are defined, action com­ponents are available as the logical verbs in ACPL, the language in which policies are expressed. Action components are defined in the Components section of the console."},{"type":"entry","name":"Active Control Policy Language (ACPL)","value":"The language used internally to represent, store, and manage components and policies. Referred to as ACPL (\"ACK-pull\") it is also used to express advanced conditions in component and policy properties. See Using Advanced Conditions."},{"type":"entry","name":"Activity Journal","value":"One of the four data stores used by CloudAz. The Activity Journal stores information sent by all enforcers about how subjects access and use information, and also on policy enforcement. When you use the Reporter console to generate reports, you are querying data from the Activity Jour­nal. The Activity Journal can be maintained either on the internal database supplied with Clou­dAz, or on an external Oracle, PostgreSQL, or Microsoft SQL database."},{"type":"entry","name":"alerts","value":"Notifications that are sent to administrators when specified policy enforcement activities occur. Together with monitors, alerts can provide continuous coverage of key policy enforcements in an enterprise, as well as a notification system that warns administrators when action is required."},{"type":"entry","name":"Auditor","value":"A logical component of Policy Enforcer software, responsible for capturing document access and use by policy subjects, as well as all policy enforcement events, and writing them to the Activity Journal database."},{"type":"entry","name":"basic actions","value":"One of the set of irreducible actions, such as open, delete, copy content, or email, that are available for combining into Activity Journal in policy bundle. Each action component can consist of one or more basic actions."},{"type":"entry","name":"bundle","value":"See policy bundle."},{"type":"entry","name":"Business Analyst","value":"One of the predefined roles available in the Administrator console. See roles."},{"type":"entry","name":"cancel","value":"One of the actions you can take to change the deployment status of policies and components. You can cancel an object if it has been submitted and scheduled for deployment, but not if it has already been deployed. Deployed objects must be deactivated before they can be canceled."},{"type":"entry","name":"component bin","value":"The pane in the lower left area of the policy bundle window, which displays all currently defined componentss. Users create new policies by dragging components from the bin up into the main editing pane."},{"type":"entry","name":"components","value":"The building blocks of policies. Components represent classes or categories of entities in the physical network environment."},{"type":"entry","name":"Computer component","value":"One of the five basic types of components you can define in policy bundle to represent classes of entities in the physical environment—in this case, computers."},{"type":"entry","name":"Control Center","value":"The enterprise-wide platform where policies are constructed, stored, and managed, and where audit data is gathered and managed, also known as CloudAz. CloudAz comprises three major pieces—the management server, the Report Server, and ICENet server—plus several data stores, which are generally stored in a dedicated, external database."},{"type":"entry","name":"deactivate","value":"The act of changing a policy or component from a deployed state to an inactive state. Deacti­vated objects can be reactivated later or deleted as needed. Objects that have been deployed must be deactivated before they can be deleted."},{"type":"entry","name":"Delegated Administration","value":"A method of managing user access to the CloudAz consoles. Delegated Administration enables administrators to manage user access to the CloudAz consoles as well as policies, and policy objects, by creating rules based on user attributes and conditions. Using rules and attributes mir­rors the way policies are used to control access to resources and eliminates the need to create and apply roles to users or groups of users."},{"type":"entry","name":"delete","value":"See deactivate."},{"type":"entry","name":"deployed","value":"One of the possible states of a policy or component. When an object is deployed, it is distributed to all relevant enforcers in the system. It then is used to govern the way components access and use resources."},{"type":"entry","name":"heartbeats","value":"Regular messages sent along the communications channel between Cloud PDPs and the CloudAz server. Cloud PDPs send regular heartbeats to the CloudAz server to indicate that they are run­ning normally. When a heartbeat occurs, the Cloud PDP receives any pending policy deployments or configuration updates from CloudAz."},{"type":"entry","name":"ICENet","value":"A protocol used for communication between policy enforcers and the CloudAz Control Center. All such communication passes through the ICENet server on the set of software servers and other modules that constitute the heart of the CloudAz platform. The main components of the CloudAz are the Policy Management Server and Policy Master data store, the Management Server and Information Network Directory, the Intelligence Server and Activity Journal, one or more ICENet Servers, and the Reporter console. Each enforcer is equipped with an ICENet client."},{"type":"entry","name":"ICENet client","value":"The component that handles remote communication with the ICENet server."},{"type":"entry","name":"ICENet server","value":"The CloudAz component that manages communication between all policy enforcers and the set of software servers and other modules that constitute the heart of the CloudAz platform. The main components of the CloudAz are the Policy Management Server and Policy Master data store, the Management Server and Information Network Directory, the Intelligence Server and Activity Journal, one or more ICENet servers, and the Reporter console server."},{"type":"entry","name":"MachineList File","value":"A manually created file that lists all PCs and servers in a given domain. Administrators can use the file to enroll file shares using the Resource Path Discovery utility."},{"type":"entry","name":"management database","value":"One of the three databases used by CloudAz. The management database stores data about autho­rized users."},{"type":"entry","name":"management server","value":"The CloudAz component that centralizes management of all system components."},{"type":"entry","name":"modify","value":"A control in the policy bundle interface, that enables administrators to change policies that have been submitted or deployed. When policies are modified, their state is changed to Draft, and they must be resubmitted to be deployed. TBD: Are policies in the Draft state deactivated"},{"type":"entry","name":"monitors","value":"Predefined criteria that identify the policy enforcement activities to be tracked. Together with alerts, monitors can provide continuous coverage of key policy enforcements in an enterprise, as well as a notification system that warns administrators when action is required."},{"type":"entry","name":"My Reports","value":"One of two tabs on the main screen of the Reporter console. This tab displays details about all reports created and owned by the user currently logged into the application. The other tab, shared reports, shows all report created and owned by all other authorized users, to which the currently logged in user has read access only. TBD: Verify: I don’t see this in the new Reporter console."},{"type":"entry","name":"object components","value":"One of the two general categories of components; the other is Activity Journal. Object compo­nents provide the subjects and objects in policies, and fall into these categories: Users, Applica­tions, Computers, Documents, and Portal Content. It is helpful to group these five together conceptually because you define and use them in a similar way, which is very different from how you build and use Activity Journal. TBD: Verify whether Object components are still relevant in the new UI."},{"type":"entry","name":"object grid","value":"In Policy Manager, the upper right pane, which displays the policies and their child components belonging to any folder selected in the policy tree. When you select any policy in this grid, the details of its definition are displayed in the details pane."},{"type":"entry","name":"obligations","value":"Instructions sent by the PDP (Policy Decision Point) to the PEP (Policy Enforcement Point) along with the authorization decision. For example, an obligation might instruct the PEP to notify the user why they are not allowed to perform a certain operation, and the message itself might be included in the obligation. In other cases, obligations might instruct the PEP to record the allowed user action in an audit database; encrypt a value before allowing the user to store that value; or inject a security filter in a SQL query to restrict the rows being returned, before allow­ing the user to run the query against a given database table.The actions CloudAz takes, in addi­tion to policy enforcement actions, such as allowing or denying user actions, when enforcing policies. There are three types of obligations: make a log entry in the Activity Journal, display a notification to the subject, and send an email notification to a specified recipient. Policies can include one or more of each of these obligation types. Log entries are required for all On Deny enforcements."},{"type":"entry","name":"PAP","value":"See Policy Administration Point."},{"type":"entry","name":"PDP","value":"See Policy Decision Point."},{"type":"entry","name":"PEP","value":"See Policy Enforcement Point."},{"type":"entry","name":"PIP","value":"See Policy Information Point."}]};
window.rh.model.publish(rh.consts('KEY_TEMP_DATA'), glossary, { sync:true });
})();