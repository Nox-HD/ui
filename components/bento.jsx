export default function Component() {
    return (
      <section className="md:grid md: grid-cols-2 gap-6 md:gap-8 lg:gap-10 px-4 md:px-48 animate-in">
        <div className="flex flex-col px-12 py-12 items-center m-5 md:m-0 justify-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:bg-primary-foreground">
          <BoltIcon className="h-10 w-10 text-primary" />
          <h3 className="text-lg font-semibold">Blazing Fast</h3>
          <p className="text-muted-foreground">Our components load instantly, ensuring a seamless user experience.</p>
        </div>
        <div className="flex flex-col px-12 py-12 items-center m-5 md:m-0 justify-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:bg-primary-foreground">
          <AccessibilityIcon className="h-10 w-10 text-primary" />
          <h3 className="text-lg font-semibold">Accessible</h3>
          <p className="text-muted-foreground">
            Our components are designed with accessibility in mind, ensuring everyone can use them.
          </p>
        </div>
        <div className="flex flex-col px-12 py-12 items-center m-5 md:m-0 justify-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:bg-primary-foreground">
          <SettingsIcon className="h-10 w-10 text-primary" />
          <h3 className="text-lg font-semibold">Customizable</h3>
          <p className="text-muted-foreground">
            Easily customize our components to match your brand and design preferences.
          </p>
        </div>
        <div className="flex flex-col px-12 py-12 items-center m-5 md:m-0 justify-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:bg-primary-foreground">
          <CodeIcon className="h-10 w-10 text-primary" />
          <h3 className="text-lg font-semibold">Open Source</h3>
          <p className="text-muted-foreground">
            Our components are open source, allowing you to contribute and collaborate.
          </p>
        </div>
      </section>
    )
  }
  
  function AccessibilityIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="4" r="1" />
        <path d="m18 19 1-7-6 1" />
        <path d="m5 8 3-3 5.5 3-2.36 3.5" />
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </svg>
    )
  }
  
  
  function BoltIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }
  
  
  function CodeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }