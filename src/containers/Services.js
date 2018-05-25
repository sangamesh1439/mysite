import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div id="services" className="container-fluid text-center">
    <h2>SERVICES</h2>
    <h4>What we offer</h4>
    <br />
    <div className="row slideanim">
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTIgNTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTQ5LjY1MDk1NTIsMjEuNjQxMDU4Yy0wLjE5MDAwMjQtMC4yNzAwMTk1LTAuNDg5OTkwMi0wLjQyOTk5MjctMC44MTk5NDYzLTAuNDI5OTkyN2wtOC41MTc3MDAyLDAuMDA5ODg3NyAgIGwtMi43MzUzNTE2LTAuMzEzNTM3NmwwLjk1MzAwMjktMi41NDYzODY3YzAuMDkwMDI2OS0wLjI1LDAuMDgwMDE3MS0wLjUxOTk1ODUtMC4wMjk5NjgzLTAuNzY5OTU4NSAgIGMtMC4xMDk5ODU0LTAuMjQwMDUxMy0wLjMwOTk5NzYtMC40MjAwNDM5LTAuNTU5OTk3Ni0wLjUyMDAxOTVMMTUuNDYwOTU0Nyw4LjY2MTAxNzQgICBjLTAuNTE5OTU4NS0wLjE5MDAwMjQtMS4wODk5NjU4LDAuMDcwMDA3My0xLjI4OTk3OCwwLjU5MDAyNjlMOC41NzEwMDExLDI0LjI0MTAzMzYgICBjLTAuMjAwMDEyMiwwLjUxMDAwOTgsMC4wNzAwMDczLDEuMDkwMDI2OSwwLjU3OTk1NjEsMS4yODAwMjkzbDE0LjAxNTgwODEsNS4yNDM0MDgydjQuNjM1OTg4MkgxMC4xNzA5NzY2VjM0LjAxMTA1NSAgIGMwLTIuNTQwMDQxLTIuMDcwMDA3My00LjYwOTk4NzMtNC42MDk5ODU4LTQuNjA5OTg3M0gyLjE3MDk3NjR2MTQuMDAwMDAxOWgzLjM5MDAxNDQgICBjMi41Mzk5Nzg1LDAsNC42MDk5ODU4LTIuMDcwMDA3Myw0LjYwOTk4NTgtNC42MTAwNDY0di0xLjM5MDU2NGgxNC45OTU3ODg2VjMxLjUxMjcwMWw2LjQ2NDIzMzQsMi40MTgzMzY5ICAgYzAuMTE5OTk1MSwwLjAzOTk3OCwwLjIzOTk5MDIsMC4wNzAwMDczLDAuMzQ5OTc1NiwwLjA3MDAwNzNjMC40MTAwMzIzLDAsMC43OTAwMzcyLTAuMjUsMC45NDAwMDA1LTAuNjUwMDI0NGwxLjUzNjg2NTItNC4xMDY1MDgzICAgbDMuMzkzMDY2NC0wLjM2NTk2NjhsNi4xMjAwNTYyLDUuMzMyNTIxNGMwLjE3OTk5MjcsMC4xNTk5NzMxLDAuNDIwMDQzOSwwLjIzOTk5MDIsMC42NTAwMjQ0LDAuMjM5OTkwMiAgIGMwLjA4OTk2NTgsMCwwLjE2OTk4MjktMC4wMTAwMDk4LDAuMjUtMC4wMzAwMjkzYzAuMzIwMDA3My0wLjA3OTk1NjEsMC41ODAwMTcxLTAuMzA5OTk3NiwwLjY5MDAwMjQtMC42MTk5OTUxICAgbDQuMjAwMDEyMi0xMS4yMzk5OTIxQzQ5Ljg4MDk5NjcsMjIuMjYxMDUzMSw0OS44NDA5NTc2LDIxLjkxMTAxNjUsNDkuNjUwOTU1MiwyMS42NDEwNTh6IE0yMi4wOTU0NzYyLDE2Ljc3MjAzOTQgICBjLTAuMTU2MjUsMC4zOTA2MjUtMC41MzIyMjY2LDAuNjI4OTA2My0wLjkyODcxMDksMC42Mjg5MDYzYy0wLjEyNDAyMzQsMC0wLjI1LTAuMDIzNDM3NS0wLjM3MTA5MzgtMC4wNzE3NzczbC0yLjUtMSAgIGMtMC41MTI2OTUzLTAuMjA1NTY2NC0wLjc2MjY5NTMtMC43ODcxMDg0LTAuNTU3NjE3Mi0xLjMwMDI5MmMwLjIwNTA3ODEtMC41MTI2OTUzLDAuNzkxMDE1Ni0wLjc2MTIzMDUsMS4yOTk4MDQ3LTAuNTU3MTI4OWwyLjUsMSAgIEMyMi4wNTA1NTQzLDE1LjY3NzMxMzgsMjIuMzAwNTU0MywxNi4yNTg4NTU4LDIyLjA5NTQ3NjIsMTYuNzcyMDM5NHoiIGZpbGw9IiMzQTkyQ0MiLz48L2c+PC9zdmc+" alt="" /></span>
        <h4>CCTV Installations</h4>
        <p>we provide customized cctv installations with onsight visits</p>
      </div>
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src="data:image/png;base64,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" alt="" /></span>
        <h4>Computers & Laptops</h4>
        <p>we sell all kinds of laptops and computers</p>
      </div>
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzkyOTI5MiIgaWQ9Imljb24tMTI0LXByaW50ZXItdGV4dCI+PHBhdGggZD0iTTI2LDI3IEwyOC4wMDU3MTgxLDI3IEMyOS42NTk0MTQzLDI3IDMxLDI1LjY1NTY0OTMgMzEsMjQuMDAwNTc3NSBMMzEsMTQuOTk5NDIyNSBDMzEsMTMuMzQyODg3MiAyOS42NTk0MzEzLDEyIDI4LjAwNTcxODEsMTIgTDI2LDEyIEwyNiw0Ljk5OTYxNDk4IEMyNiwzLjg5NTI1ODEyIDI1LjEwOTA3NDYsMyAyNC4wMDI1NzgxLDMgTDguOTk3NDIxOTEsMyBDNy44OTQyNzYyNSwzIDcsMy44ODc0MzMyOSA3LDQuOTk5NjE0OTggTDcsMTIgTDcsMTIgTDQuOTk0MjgxODksMTIgQzMuMzQwNTg1NjYsMTIgMiwxMy4zNDQzNTA3IDIsMTQuOTk5NDIyNSBMMiwyNC4wMDA1Nzc1IEMyLDI1LjY1NzExMjggMy4zNDA1Njg3LDI3IDQuOTk0MjgxODksMjcgTDcsMjcgTDcsMjguMDAwMzg1IEM3LDI5LjEwNDc0MTkgNy44OTA5MjUzOSwzMCA4Ljk5NzQyMTkxLDMwIEwyNC4wMDI1NzgxLDMwIEMyNS4xMDU3MjM4LDMwIDI2LDI5LjExMjU2NjcgMjYsMjguMDAwMzg1IEwyNiwyNyBMMjYsMjcgTDI2LDI3IFogTTcsMjYgTDUuMDA3MzI5OTQsMjYgQzMuODk4MzM4MzIsMjYgMywyNS4xMDMzMzM3IDMsMjMuOTk3MjM5OSBMMywxNS4wMDI3NjAxIEMzLDEzLjg5MzU0MjYgMy44OTg3MTIyMywxMyA1LjAwNzMyOTk0LDEzIEwyNy45OTI2NzAxLDEzIEMyOS4xMDE2NjE3LDEzIDMwLDEzLjg5NjY2NjMgMzAsMTUuMDAyNzYwMSBMMzAsMjMuOTk3MjM5OSBDMzAsMjUuMTA2NDU3NCAyOS4xMDEyODc4LDI2IDI3Ljk5MjY3MDEsMjYgTDI2LDI2IEwyNiwyMCBMNywyMCBMNywyNiBMNywyNiBMNywyNiBaIE04Ljk5OTk2MDIsNCBDOC40NDc2OTc0Myw0IDgsNC40NTMwMzYzMSA4LDQuOTk3MDMwMTQgTDgsMTIgTDI1LDEyIEwyNSw0Ljk5NzAzMDE0IEMyNSw0LjQ0NjM4NTYgMjQuNTQ1MjkxMSw0IDI0LjAwMDAzOTgsNCBMOC45OTk5NjAyLDQgTDguOTk5OTYwMiw0IFogTTgsMjEgTDgsMjguMDAyOTY5OSBDOCwyOC41NTM2MTQ0IDguNDU0NzA4OTMsMjkgOC45OTk5NjAyLDI5IEwyNC4wMDAwMzk4LDI5IEMyNC41NTIzMDI2LDI5IDI1LDI4LjU0Njk2MzcgMjUsMjguMDAyOTY5OSBMMjUsMjEgTDgsMjEgTDgsMjEgWiBNMjUsMTcgQzI1LjU1MjI4NDgsMTcgMjYsMTYuNTUyMjg0OCAyNiwxNiBDMjYsMTUuNDQ3NzE1MiAyNS41NTIyODQ4LDE1IDI1LDE1IEMyNC40NDc3MTUyLDE1IDI0LDE1LjQ0NzcxNTIgMjQsMTYgQzI0LDE2LjU1MjI4NDggMjQuNDQ3NzE1MiwxNyAyNSwxNyBMMjUsMTcgWiBNOSwyMyBMOSwyNCBMMjQsMjQgTDI0LDIzIEw5LDIzIEw5LDIzIFogTTksMjYgTDksMjcgTDI0LDI3IEwyNCwyNiBMOSwyNiBMOSwyNiBaIiBpZD0icHJpbnRlci10ZXh0Ii8+PC9nPjwvZz48L3N2Zz4=" alt="" /></span>
        <h4>Printer Repairing Services</h4>
        <p>we offer onsight services for cartridge refilling</p>
      </div>
    </div>
    <br /><br />
    <div className="row slideanim">
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src="data:image/png;base64,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" alt="" /></span>
        <h4>HardDisk Ram Processors</h4>
        <p>we are wholesale dealers for HardDisks, Ram & Mother Board Processors</p>
      </div>
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTIgNTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PHBhdGggZD0iTTQ3Ljk0NTMxMjUsNDMuMTczNDYxOWMtMS4yNTY4OTctMy40NTkzNTA2LTQuMDE1MDc1Ny02LjExMzQwMzMtNy40NjU4MjAzLTcuMjg3ODQxOCAgICBDNDAuODA4NDEwNiwzNC4zMjM3MzA1LDQxLjAwMDYxMDQsMzIuNjkxNzcyNSw0MS4wMDA2MTA0LDMxYzAtMC45MjY4Nzk5LTAuMDU0MTk5Mi0xLjg0Mzg3MjEtMC4xNTg2OTE0LTIuNzQ1MjM5MyAgICBsNy41NjUzMDc2LDUuNTQ3NjA3NGwxLjE4MzU5MzgtMS42MTMyODEzbC05LjI2NzIxMTktNi43OTU2NTQzYy0wLjQxMTYyMTEtMS42ODExNTIzLTEuMDAyMDE0Mi0zLjI3NzIyMTctMS43NTI3NDY2LTQuNzQzMDQyICAgIGw3LjE4Njk1MDctMS44MTQ4MTkzbDQuMTgwNjY0MS0xMS40OTgwNDY5bC0xLjg3ODkwNjMtMC42ODM1OTM4bC0zLjgxOTMzNTksMTAuNTAxOTUzMWwtNi43MTU4MjAzLDEuNjk1NTU2NiAgICBjLTEuMzkwMjU4OC0yLjEyMzc3OTMtMy4xNDQ4OTc1LTMuODc5ODgyOC01LjE4Mzc3NjktNS4wODE1NDNDMzAuMzYwNTk1NywxMi41OTk5NzU2LDI4LjIzMDY1MTksMTIsMjYuMDAwNjEwNCwxMiAgICBjLTIuMjM5OTkwMiwwLTQuMzgwMDA0OSwwLjU5OTk3NTYtNi4zNDk5NzU2LDEuNzc5OTA3MmMtMi4wMzI1MzE3LDEuMjAwMTk1My0zLjc4MzI2NDIsMi45NTMzNjkxLTUuMTcxMjY0Niw1LjA3MzI0MjIgICAgbC02LjcyMTU1NzYtMS42OTcyNjU2TDMuOTM4NDc2Niw2LjY1MzkzMDdMMi4wNTk1NzAzLDcuMzM3NTI0NGw0LjE4MDY2NDEsMTEuNDk4MDQ2OWw3LjE5Mjc0OSwxLjgxNjUyODMgICAgYy0wLjc1MDMwNTIsMS40NjQyMzM0LTEuMzQwNzU5MywzLjA1ODIyNzUtMS43NTI4MDc2LDQuNzM3MTgyNmwtOS4yNzI5NDkyLDYuNzk5ODA0N2wxLjE4MzU5MzgsMS42MTMyODEzbDcuNTY5Mzk3LTUuNTUwNTM3MSAgICBDMTEuMDU1Mjk3OSwyOS4xNTQyOTY5LDExLjAwMDYxMDQsMzAuMDcyMjY1NiwxMS4wMDA2MTA0LDMxYzAsMS42OTE1MjgzLDAuMTkyMTk5NywzLjMyMzM2NDMsMC41MjA5OTYxLDQuODg1MjUzOSAgICBjLTMuNDUwMzE3NCwxLjE3MzU4NC02LjIwODA2ODgsMy44Mjg0OTEyLTcuNDY1OTQyNCw3LjI4ODIwOGwtMS45OTQxNDA2LDUuNDg0Mzc1bDEuODc4OTA2MywwLjY4MzU5MzhsMS45OTQxNDA2LTUuNDg0Mzc1ICAgIGMxLjAzMjgzNjktMi44MzgyNTY4LDMuMjcyNTIyLTUuMDMwMjczNCw2LjA4MjY0MTYtNi4wMzQxNzk3QzE0LjE4Nzg2NjIsNDQuOTM1NjY4OSwxOS42MzAxODgsNTAsMjYuMDAwNjEwNCw1MCAgICBjNi4zNzA0ODM0LDAsMTEuODEyODA1Mi01LjA2NDMzMTEsMTMuOTgzMzk4NC0xMi4xNzcxMjRjMi44MTA4NTIxLDEuMDA0MDI4Myw1LjA1MDQ3NjEsMy4xOTY3NzczLDYuMDgyMzk3NSw2LjAzNDE3OTcgICAgbDEuOTk1MTE3Miw1LjQ4NDM3NWwxLjg3ODkwNjMtMC42ODM1OTM4TDQ3Ljk0NTMxMjUsNDMuMTczNDYxOXoiLz48L2c+PGc+PHBhdGggZD0iTTE4LjYzMzc4OTEsMTIuMDU3MjUxYzIuMjc3MzQzOC0xLjM2MzI4MTMsNC43NTk3NjU2LTIuMDU3NjE3Miw3LjM2NzE4NzUtMi4wNTc2MTcyICAgIGMyLjU4MTA1NDcsMCw1LjA1NTY2NDEsMC42ODk0NTMxLDcuMzU3NDIxOSwyLjA0ODgyODFjMC4xNDc2NDQsMC4wODcwMzYxLDAuMjg4MDI0OSwwLjE4NzUsMC40MzMwNDQ0LDAuMjc5NTQxICAgIGMwLjEyNDc1NTktMC41OTY5MjM4LDAuMjA5MTY3NS0xLjIwNTQ0NDMsMC4yMDkxNjc1LTEuODI4MDAyOWMwLTQuNjkwMDYzNS0zLjU4OTk2NTgtOC41LTgtOC41Yy00LjQwOTk3MzEsMC04LDMuODA5OTM2NS04LDguNSAgICBjMCwwLjYyMjU1ODYsMC4wODM2NzkyLDEuMjMyNjY2LDAuMjA4MTI5OSwxLjgzMjE1MzNDMTguMzUxMTM1MywxMi4yNDE4MjEzLDE4LjQ4ODgzMDYsMTIuMTQyODIyMywxOC42MzM3ODkxLDEyLjA1NzI1MXogICAgIE0yNi45OTkwMjM0LDYuOTk1NzI3NWgydjJoLTJWNi45OTU3Mjc1eiBNMjIuOTk5MDIzNCw2Ljk5NTcyNzVoMnYyaC0yVjYuOTk1NzI3NXoiIGZpbGw9IiMzQTkyQ0MiLz48L2c+PC9nPjwvc3ZnPg=="/></span>
        <h4>Authorized Dealer for NPAV</h4>
        <p>we are authorized dealers of Net Protector Antivirus since 8 yrs</p>
      </div>
      <div className="col-sm-4">        
        <span className="logo-small"><img className="service-logos" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdmlld0JveD0iMCAwIDUwMDAgNTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwogICAgLnN0cjEge3N0cm9rZTojNDM0MjQyO3N0cm9rZS13aWR0aDoxMDB9CiAgICAuc3RyMCB7c3Ryb2tlOiM0MzQyNDI7c3Ryb2tlLXdpZHRoOjMwMDtzdHJva2UtbGluZWNhcDpyb3VuZH0KICAgIC5maWwwIHtmaWxsOm5vbmV9CiAgICAuZmlsMSB7ZmlsbDojNDM0MjQyfQogICAgLmZpbDIge2ZpbGw6dXJsKCNpZDApfQogICBdXT48L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImlkMCIgeDE9IjI1MDAuMDEiIHgyPSIyNTAwLjAxIiB5MT0iNDI2MC4xOSIgeTI9IjE0NzQuODEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwOEJGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBhZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGlkPSJMYXllcl94MDAyMF8xIj48cGF0aCBjbGFzcz0iZmlsMCBzdHIwIiBkPSJNMzAwIDIwMDBsMjA1MC0xNjAwYzEwMC01MCAyMDAtNTAgMzAwIDBsMjA1MCAxNTAwIi8+PHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0zNTAwIDEwMjJsNjAwIDQzOXYtODYxYzAtNTUtNDUtMTAwLTEwMC0xMDBoLTQwMGMtNTUgMC0xMDAgNDUtMTAwIDEwMHY0MjJ6Ii8+PHBhdGggY2xhc3M9ImZpbDIgc3RyMSIgZD0iTTg5OSA0NzAwaDkwMXYtMTUwMGMwLTExMCA5MC0yMDAgMjAwLTIwMGg5MDBjMTEwIDAgMjAwIDkwIDIwMCAyMDB2MTUwMGgxMDAxYzE2NSAwIDMwMC0xMzUgMzAwLTMwMGwtMS0yMDAwLTE3NzYtMTMyOGMtMzMtMjYtNzktMzctMTI0LTM2cy05MiAxNC0xMjcgNDBsLTE3NzMgMTMyNC0xIDIwMDBjMCAxNjUgMTM1IDMwMCAzMDAgMzAweiIvPjwvZz48L3N2Zz4="/></span>        
        <h4>Onsight Services</h4>
        <p>We provide onsight services</p>
      </div>
    </div>
  </div>

))