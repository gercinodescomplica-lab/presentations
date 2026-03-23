import { usePresentation } from './hooks/usePresentation'
import SlideContainer from './components/SlideContainer'
import SlideFrame from './components/SlideFrame'
import PresentationControls from './components/PresentationControls'
import KeyboardNavigation from './components/KeyboardNavigation'
import LanguageSwitcher from './components/LanguageSwitcher'
import PrintButton from './components/PrintButton'
import Slide00Cover from './slides/Slide00Cover'
import Slide01Hero from './slides/Slide01Hero'
import Slide02WhatIsDigitalTwin from './slides/Slide02WhatIsDigitalTwin'
import Slide03SmartCities from './slides/Slide03SmartCities'
import Slide04WhyCitiesNeedDT from './slides/Slide04WhyCitiesNeedDT'
import Slide05VisionTwinSP from './slides/Slide05VisionTwinSP'
import Slide06CoreCapabilities from './slides/Slide06CoreCapabilities'
import Slide07HowDTWorks from './slides/Slide07HowDTWorks'
import Slide08DataSources from './slides/Slide08DataSources'
import Slide09TechLayers from './slides/Slide09TechLayers'
import Slide10SimulationCapabilities from './slides/Slide10SimulationCapabilities'
import Slide11RealWorldExamples from './slides/Slide11RealWorldExamples'
import Slide12UseCasesSP from './slides/Slide12UseCasesSP'
import Slide13UrbanMobility from './slides/Slide13UrbanMobility'
import Slide14InfrastructureMonitoring from './slides/Slide14InfrastructureMonitoring'
import Slide15EnvironmentalMonitoring from './slides/Slide15EnvironmentalMonitoring'
import Slide16PublicSafety from './slides/Slide16PublicSafety'
import Slide17UrbanPlanning from './slides/Slide17UrbanPlanning'
import Slide18WhyInPhases from './slides/Slide18WhyInPhases'
import Slide19InitialPilot from './slides/Slide19InitialPilot'
import Slide20ExpansionStrategy from './slides/Slide20ExpansionStrategy'
import Slide21TechArchitecture from './slides/Slide21TechArchitecture'
import Slide22AIIntelligence from './slides/Slide22AIIntelligence'
import Slide23Integration from './slides/Slide23Integration'
import Slide24Roadmap from './slides/Slide24Roadmap'
import Slide25Benefits from './slides/Slide25Benefits'
import Slide26StrategicImpact from './slides/Slide26StrategicImpact'
import Slide27FutureVision from './slides/Slide27FutureVision'
import Slide28Closing from './slides/Slide28Closing'

const SLIDES = [
  Slide00Cover,
  Slide01Hero,
  Slide02WhatIsDigitalTwin,
  Slide03SmartCities,
  Slide04WhyCitiesNeedDT,
  Slide05VisionTwinSP,
  Slide06CoreCapabilities,
  Slide07HowDTWorks,
  Slide08DataSources,
  Slide09TechLayers,
  Slide10SimulationCapabilities,
  Slide11RealWorldExamples,
  Slide12UseCasesSP,
  Slide13UrbanMobility,
  Slide14InfrastructureMonitoring,
  Slide15EnvironmentalMonitoring,
  Slide16PublicSafety,
  Slide17UrbanPlanning,
  Slide18WhyInPhases,
  Slide19InitialPilot,
  Slide20ExpansionStrategy,
  Slide21TechArchitecture,
  Slide22AIIntelligence,
  Slide23Integration,
  Slide24Roadmap,
  Slide25Benefits,
  Slide26StrategicImpact,
  Slide27FutureVision,
  Slide28Closing,
]

export default function App() {
  const presentation = usePresentation(SLIDES.length)
  const {
    currentSlide,
    direction,
    isPresenting,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePresentation,
    isFirst,
    isLast,
    totalSlides,
  } = presentation

  const CurrentSlide = SLIDES[currentSlide]

  return (
    <SlideFrame isPresenting={isPresenting}>
      <SlideContainer currentSlide={currentSlide} direction={direction}>
        <CurrentSlide />
      </SlideContainer>

      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isPresenting={isPresenting}
        isFirst={isFirst}
        isLast={isLast}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        goToSlide={goToSlide}
        togglePresentation={togglePresentation}
      />

      <KeyboardNavigation isPresenting={isPresenting} />
      <LanguageSwitcher isPresenting={isPresenting} />
      <PrintButton slides={SLIDES} isPresenting={isPresenting} />
    </SlideFrame>
  )
}
