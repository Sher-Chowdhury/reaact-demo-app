# my-app1

Ref - https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs


this app has 3 pages:

- [http://localhost:3000/](http://localhost:3000/)
- [http://localhost:3000/about](http://localhost:3000/about)
- [http://localhost:3000/careers/vacancies](http://localhost:3000/careers/vacancies)

This app has 2 things that it's lacking:

- we havent added links, yet so have to go from one page to another by entering the full url in the address bar. 
- state data isn't preserved, i.e. like button presses gets reset when going from one page to another. 



# my-app2-with-nav-menu

Ref - https://nextjs.org/learn/basics/navigate-between-pages/link-component

like my-app2, but added a nav menu.

we could have also used the plain old `<a href="...">....</a>` tags instead
of nextjs's `<Link href="...">....</Link>` tags. However `Link` tags are better because it results in client-side-rendering
rather than server-side-rendering, which means faster performance.


# my-app3-with-nav-menu-refactored

Reduced some code duplication by separating out the navigation menu component into it's own file. 

