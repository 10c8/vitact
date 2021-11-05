import { useRegisterSW } from 'virtual:pwa-register/react';

const intervalMS = 30 * 60 * 1000;

export const PWAReloadPrompt = (): JSX.Element => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      if (r) {
        setInterval(() => {
          console.log('Checking for Service Worker update...');
          r?.update();
        }, intervalMS);
      } else {
        console.log('Service Worker registered.');
      }
    },
    onRegisterError(error) {
      console.error('Service Worker registration failed:', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <>
      {needRefresh && (
        <div
          className="*stack-v"
          w-pos="fixed right-5 md:top-5 <md:(bottom-10 left-5)"
          w-p="x-7 y-5"
          w-border="1 [#121212] dark:[#FFFFFF25]"
          w-text="[#121212] dark:white"
          w-bg="white dark:[#121212]"
          w-rounded="lg"
          w-shadow="xl white"
        >
          <div w-text="lg md:xl" w-m="b-5">
            <span>
              New content available, click on reload button to update.
            </span>
          </div>
          <div className="*stack-h" w-gap="3" w-w="full">
            {needRefresh && (
              <button
                className="*flex-center"
                w-p="x-3 y-1"
                w-border="1 [#121212] dark:[#FFFFFF25]"
                w-w="full"
                w-text="[#121212] dark:white hover:(white dark:[#121212])"
                w-bg="hover:([#121212] dark:white)"
                w-rounded="sm"
                w-transition="all duration-200"
                onClick={() => updateServiceWorker(true)}
              >
                Reload
              </button>
            )}
            <button
              className="*flex-center"
              w-p="x-3 y-1"
              w-border="1 [#121212] dark:[#FFFFFF25]"
              w-w="full"
              w-text="[#121212] dark:white hover:(white dark:[#121212])"
              w-bg="hover:([#121212] dark:white)"
              w-rounded="sm"
              w-transition="all duration-200"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
