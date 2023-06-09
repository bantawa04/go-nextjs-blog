import Head from "next/head"
import * as Sentry from "@sentry/node"
import { AppProps } from "next/app"
import { auth, LanguageOption } from "@project/shared"
import { useCallback, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { message } from "antd"
import { CloseCircleFilled } from "@ant-design/icons"
import { useTranslation } from "react-i18next"
import { QueryClient, QueryClientProvider } from "react-query"
import { GlobalStyles, AuthProvider } from "../utils"
import "../utils/css-imports"

const queryClient = new QueryClient({ defaultOptions: {} })

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `owner-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [isOwner, setIsOwner] = useState(false)
  const { t } = useTranslation()

  const initialLoad = useCallback(() => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user !== null) {
          setUser(user)
          setIsOwner(true)
        }
        setLoading(false)
      } catch (error) {
        Sentry.captureException(error)
        message.error({
          key: "02",
          content: t("An error has occurred. Please try again later."),
          icon: <CloseCircleFilled onClick={() => message.destroy("02")} />,
        })
      }
    })
  }, [])

  useEffect(() => {
    initialLoad()
  }, [])

  return (
    <>
      <Head>
        <title>{"Owner"}</title>
      </Head>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AuthProvider
          loading={loading}
          user={user}
          isOwner={isOwner}
          setUser={setUser}
        >
          <Component {...pageProps} />
          {process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? (
            <LanguageOption />
          ) : (
            <></>
          )}
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
