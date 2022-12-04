import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <article>
        <h1>First post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta justo eu egestas porta. In hac habitasse platea dictumst. Maecenas dolor justo, dignissim nec enim nec, pellentesque iaculis dolor. Quisque vitae arcu nec est feugiat scelerisque eget eget velit. Morbi elementum sit amet lectus ut tristique. In hac habitasse platea dictumst. Suspendisse ac sem at risus posuere lobortis nec eget arcu. Ut convallis sapien elit, et molestie quam pretium a. Phasellus euismod faucibus egestas. Curabitur dignissim lorem eget consequat posuere. Praesent augue eros, feugiat vitae dapibus quis, consectetur sed urna. Aliquam quis orci ut nibh tincidunt mattis. Pellentesque aliquet quis elit sit amet malesuada. Pellentesque convallis quis lectus at dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan porta est interdum bibendum.
        </p>
        <p>
          Proin aliquam, orci nec condimentum scelerisque, est felis tristique tellus, nec tempor ante justo ut nisl. Morbi lacinia efficitur pretium. Nullam consectetur sapien id placerat euismod. Praesent euismod, risus quis tincidunt pharetra, est magna ultricies quam, et malesuada justo nibh non leo. Curabitur risus leo, varius non consectetur at, tristique at ex. Suspendisse eu arcu quis urna eleifend interdum nec in massa. Duis non tortor quis urna facilisis laoreet non in velit.
        </p>
      </article>
      <Link href="/">Home</Link>
    </>
  )
}
