$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Database SQL query feature",
  "description": "",
  "id": "database-sql-query-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8844251011,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Execute all information from Actor Table",
  "description": "",
  "id": "database-sql-query-feature;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sqlquery"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User connects to PostgreSQL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User sends \"select * from public.actor\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "SqlQueryStepDefinition.user_connects_to_PostgreSQL()"
});
formatter.result({
  "duration": 1000964788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from public.actor",
      "offset": 12
    }
  ],
  "location": "SqlQueryStepDefinition.user_sends(String)"
});
formatter.result({
  "duration": 12888978,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"java.sql.Connection.createStatement()\" because \"utlities.DataBaseUtility.connection\" is null\r\n\tat utlities.DataBaseUtility.runQuery(DataBaseUtility.java:49)\r\n\tat stepDefinitions.SqlQueryStepDefinition.user_sends(SqlQueryStepDefinition.java:16)\r\n\tat ✽.When User sends \"select * from public.actor\"(Features/DataBaseFeature.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SqlQueryStepDefinition.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3165093420,
  "status": "passed"
});
});