This is a simple example of using Next.js and our `ColorPicker` component. As shown in class, it was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

There are a couple of changes from the default structure:

- _pages_ and _styles_ have been moved into a new _src_ directory (this is an alternate structure supported by Next)
- the _api_ directory has been removed (we aren't using it)
- a _components_ directory was added for our smaller components (which is where the `ColorPicker` component resides)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
