// Lib
import { Tweet as TweetType } from 'lib/twitter'

// Primitives
import Section from 'components/layout/section'

// Local Components
import Feature from './feature'
import Release from './release'
import Tweet from './tweet'

// Styles
import { styled } from '../../../../stitches.config'

const SectionInner = styled('section', {
  background: '$black',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
})

const Column = styled('div', {
  width: '100%',
  padding: '90px 40px',

  '&:not(:first-child)': {
    borderLeft: '1px solid $white'
  }
})

const TweetWrapper = styled('div', {
  '&:not(:last-child)': {
    marginBottom: '44px'
  }
})

export const Text = styled('p', {
  fontFamily: '$body',
  lineHeight: 1,
  color: '$white',

  variants: {
    size: {
      xs: {
        fontSize: '$3'
      },
      md: {
        fontSize: '$6',
        letterSpacing: -1
      },
      lg: {
        fontSize: '$9'
      },
      xl: {
        fontSize: '$14',
        lineHeight: 1
      },
      icon: {
        fontSize: '$7'
      }
    },
    centered: {
      true: {
        textAlign: 'center'
      }
    },
    heading: {
      true: {
        fontFamily: '$heading'
      }
    }
  }
})

type DataColumnsProps = {
  tweets: TweetType[]
}

const DataColumns = ({ tweets }: DataColumnsProps) => {
  return (
    <Section>
      <SectionInner>
        <Column>
          <Text size="lg" heading>
            Version History
          </Text>
          <Release
            version="1.2"
            date="JULY 30,2021"
            text="Basement Grotesque urna in a nisl, blandit donec augue rhoncus, bibendum. Pellentesque ut id massa leo a non, in augue. Mollis augue ornare amet facilisi facilisis. Faucibus amet et faucibus eget. Porta nisl curabitur tortor vitae tortor placerat."
          />
          <Release
            version="1.2"
            date="JULY 30,2021"
            text="Basement Grotesque urna in a nisl, blandit donec augue rhoncus, bibendum. Pellentesque ut id massa leo a non, in augue. Mollis augue ornare amet facilisi facilisis. Faucibus amet et faucibus eget. Porta nisl curabitur tortor vitae tortor placerat."
          />
          <Release
            version="1.2"
            date="JULY 30,2021"
            text="Basement Grotesque urna in a nisl, blandit donec augue rhoncus, bibendum. Pellentesque ut id massa leo a non, in augue. Mollis augue ornare amet facilisi facilisis. Faucibus amet et faucibus eget. Porta nisl curabitur tortor vitae tortor placerat."
          />
        </Column>
        <Column>
          <Text size="lg" heading>
            Features status
          </Text>
          <div>
            <Feature title="Family styles" score={1} />
            <Feature title="Character set" score={4} />
            <Feature title="Spacing &amp; Kerning" score={3} />
            <Feature title="Hinting" score={4} />
          </div>
        </Column>
        <Column>
          <Text size="lg" heading>
            Tweets
          </Text>
          <div style={{ marginTop: 42 }}>
            {tweets.map((tweet) => {
              return (
                <TweetWrapper key={tweet.id}>
                  <Tweet tweet={tweet} />
                </TweetWrapper>
              )
            })}
          </div>
        </Column>
      </SectionInner>
    </Section>
  )
}

export default DataColumns