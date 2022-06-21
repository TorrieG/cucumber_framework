$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/wikipedia.feature");
formatter.feature({
  "name": "Wiki Search Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user searches for \"\u003ckey\u003e\" on Wikipedia",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the title",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the url",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the first heading",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "key"
      ]
    },
    {
      "cells": [
        "Elon Musk"
      ]
    },
    {
      "cells": [
        "Bill Gates"
      ]
    },
    {
      "cells": [
        "Johnny Depp"
      ]
    },
    {
      "cells": [
        "Post Malone"
      ]
    },
    {
      "cells": [
        "Jack Harlow"
      ]
    },
    {
      "cells": [
        "Lil Baby"
      ]
    },
    {
      "cells": [
        "bob the builder"
      ]
    },
    {
      "cells": [
        "Jennifer Lopez"
      ]
    },
    {
      "cells": [
        "Robert downey jr"
      ]
    },
    {
      "cells": [
        "Irina Shayk"
      ]
    },
    {
      "cells": [
        "Kobe Bryant"
      ]
    },
    {
      "cells": [
        "Piero Manzoni"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Elon Musk\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Bill Gates\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Johnny Depp\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Johnny Depp\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Johnny Depp\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Johnny Depp\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Post Malone\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Post Malone\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Post Malone\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Post Malone\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Jack Harlow\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Jack Harlow\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Jack Harlow\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Jack Harlow\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Lil Baby\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Lil Baby\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Lil Baby\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Lil Baby\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"bob the builder\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"bob the builder\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat steps.BaseSteps.user_should_see_in_the_title(BaseSteps.java:33)\r\n\tat ✽.user should see \"bob the builder\" in the title(src/test/resources/features/wikipedia.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"bob the builder\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"bob the builder\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Jennifer Lopez\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Jennifer Lopez\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Jennifer Lopez\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Jennifer Lopez\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Robert downey jr\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Robert downey jr\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat steps.BaseSteps.user_should_see_in_the_title(BaseSteps.java:33)\r\n\tat ✽.user should see \"Robert downey jr\" in the title(src/test/resources/features/wikipedia.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"Robert downey jr\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Robert downey jr\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Irina Shayk\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Irina Shayk\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Irina Shayk\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Irina Shayk\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Kobe Bryant\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Kobe Bryant\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Kobe Bryant\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Kobe Bryant\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wiki"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Piero Manzoni\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Piero Manzoni\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Piero Manzoni\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Piero Manzoni\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});