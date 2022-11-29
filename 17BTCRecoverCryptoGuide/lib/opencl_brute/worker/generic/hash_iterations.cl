// Extremely basic (but useful) script to perform a certain number of hashing iterations when used with a pre-existing
// hasing library which is called via hash_main. (Useful for some cryptocurrency wallets which use custom key stretching)
//
// Generally speaking, this this function will take a hash (and maybe salted) password as the input, with this initial
// hash happening in the calling application. This means that the input and output will always be the same size and that
// we don't need to worry about padding, etc...
//
// Originally created for BTCRecover by Stephen Rothery, available at https://github.com/3rdIteration/btcrecover
//    MIT License

__kernel void hash_iterations(__global inbuf *inbuffer, __global outbuf *outbuffer, __private unsigned int iters, __private unsigned int hash_size)
{
    unsigned int idx = get_global_id(0);

    // Iterate through and has the input as many times as required
    for (unsigned int j = 0; j < iters; j++){
        hash_main(inbuffer, outbuffer);

        // Copy the output from the hash back in to the input...
        for (unsigned int i = 0; i < hash_size; i++){
            inbuffer[idx].buffer[i] = outbuffer[idx].buffer[i];
        }
    }
}
