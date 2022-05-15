# Part 0
In part 0 of the course we talk about web development in general: AJA, JavaScript, Forms, etc.

### Exercise 4
![exercise 4](./0.4%20new%20note.png)

```
title 0.4 new note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_notes
server-->browser: Do a new HTTP GET request to /notes
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-Code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

### Exercise 5
![exercise 5](./0.5%20spa.png)

```
title 0.5 spa

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-Code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

### Exercise 6
![exercise 6](./0.6%20new%20note%20spa.png)
title 0.6 new note spa

```
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note over browser:
Content-type: application/json
{
    "content": "as",
    "date": "2022-05-15T17:25:55.924Z"
}

end note

server-->browser: 201 created

note over browser:
browser executes the event handler
that renders notes to display
end note
```