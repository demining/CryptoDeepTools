.. rst-class:: float-right without-title

.. todo::

    **Caveat Emptor**

    Passlib's implementations of :class:`cisco_pix` and :class:`cisco_asa` both need verification.
    For those with access to Cisco PIX and ASA systems, verifying Passlib's reference vectors
    would be a great help (see :issue:`51`). In the mean time, there are no guarantees
    that passlib correctly replicates the official implementation.

    .. versionchanged:: 1.7.1

        A number of :ref:`bugs <passlib-asa96-bug>` were fixed after expanding
        the reference vectors, and testing against an ASA 9.6 system.
